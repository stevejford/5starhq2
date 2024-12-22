import type { BusinessSearchResult, Review } from '../types/business';
import { supabase } from '../config/supabase';
import GoogleMapsLoader from './googleMapsLoader';

interface AutocompletePrediction {
  place_id: string;
  description: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

interface PlaceDetails extends google.maps.places.PlaceResult {
  reviews?: google.maps.places.PlaceReview[];
}

class GooglePlacesService {
  private static instance: GooglePlacesService;
  private placesService: google.maps.places.PlacesService | null = null;
  private autocompleteService: google.maps.places.AutocompleteService | null = null;

  private constructor() {}

  static getInstance(): GooglePlacesService {
    if (!GooglePlacesService.instance) {
      GooglePlacesService.instance = new GooglePlacesService();
    }
    return GooglePlacesService.instance;
  }

  private async initServices(): Promise<void> {
    if (!this.placesService || !this.autocompleteService) {
      const predictions = await GoogleMapsLoader.getPlacePredictions('');
      const details = await GoogleMapsLoader.getPlaceDetails('');
      this.placesService = {} as google.maps.places.PlacesService;
      this.autocompleteService = {} as google.maps.places.AutocompleteService;
    }
  }

  async searchPlaces(query: string): Promise<AutocompletePrediction[]> {
    await this.initServices();
    if (!this.autocompleteService) {
      throw new Error('Autocomplete service not initialized');
    }

    return new Promise((resolve, reject) => {
      this.autocompleteService!.getPlacePredictions(
        {
          input: query,
          types: ['establishment']
        },
        (predictions, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
            resolve(predictions as AutocompletePrediction[]);
          } else {
            reject(new Error(`Places search failed: ${status}`));
          }
        }
      );
    });
  }

  async getPlaceDetails(placeId: string): Promise<BusinessSearchResult> {
    await this.initServices();
    if (!this.placesService) {
      throw new Error('Places service not initialized');
    }

    return new Promise((resolve, reject) => {
      this.placesService!.getDetails(
        {
          placeId,
          fields: [
            'name',
            'formatted_address',
            'formatted_phone_number',
            'international_phone_number',
            'rating',
            'user_ratings_total',
            'reviews',
            'website',
            'url',
            'opening_hours',
            'types'
          ]
        },
        async (place: PlaceDetails | null, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place) {
            try {
              const { data: existingBusiness } = await supabase
                .from('businesses')
                .select('id')
                .eq('place_id', placeId)
                .single();

              if (existingBusiness) {
                resolve({
                  id: existingBusiness.id,
                  name: place.name || '',
                  formatted_address: place.formatted_address || '',
                  formatted_phone_number: place.formatted_phone_number,
                  international_phone_number: place.international_phone_number,
                  rating: place.rating,
                  user_ratings_total: place.user_ratings_total,
                  website: place.website,
                  url: place.url,
                  reviews: this.transformReviews(place.reviews),
                  place_id: placeId,
                  types: place.types || []
                });
                return;
              }

              const { data: newBusiness, error } = await supabase
                .from('businesses')
                .insert([
                  {
                    place_id: placeId,
                    name: place.name,
                    formatted_address: place.formatted_address,
                    formatted_phone_number: place.formatted_phone_number,
                    international_phone_number: place.international_phone_number,
                    rating: place.rating,
                    user_ratings_total: place.user_ratings_total,
                    website: place.website,
                    url: place.url
                  }
                ])
                .select()
                .single();

              if (error) throw error;

              if (place.reviews) {
                await this.saveReviews(newBusiness.id, place.reviews);
              }

              resolve({
                id: newBusiness.id,
                name: place.name || '',
                formatted_address: place.formatted_address || '',
                formatted_phone_number: place.formatted_phone_number,
                international_phone_number: place.international_phone_number,
                rating: place.rating,
                user_ratings_total: place.user_ratings_total,
                website: place.website,
                url: place.url,
                reviews: this.transformReviews(place.reviews),
                place_id: placeId,
                types: place.types || []
              });
            } catch (error) {
              console.error('Error saving place details:', error);
              reject(error);
            }
          } else {
            reject(new Error(`Place details failed: ${status}`));
          }
        }
      );
    });
  }

  private transformReviews(reviews: google.maps.places.PlaceReview[] | undefined): Review[] {
    if (!reviews) return [];

    return reviews.map(review => ({
      author_name: review.author_name || '',
      rating: review.rating || 0,
      text: review.text || '',
      time: review.time || 0,
      relative_time_description: review.relative_time_description || '',
      platform: {
        name: 'Google',
        id: 'google'
      }
    }));
  }

  private async saveReviews(businessId: string, reviews: google.maps.places.PlaceReview[]): Promise<void> {
    const transformedReviews = reviews.map(review => ({
      business_id: businessId,
      author_name: review.author_name,
      rating: review.rating,
      text: review.text,
      time: review.time,
      relative_time_description: review.relative_time_description,
      platform: {
        name: 'Google',
        id: 'google'
      }
    }));

    const { error } = await supabase
      .from('reviews')
      .insert(transformedReviews);

    if (error) throw error;
  }
}

export default GooglePlacesService.getInstance();
