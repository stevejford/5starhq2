import { supabase } from '../config/supabase';

interface PlacePrediction {
  place_id: string;
  description: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

interface PlaceDetails {
  place_id: string;
  name: string;
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

class GoogleMapsService {
  static async getPlacePredictions(input: string): Promise<PlacePrediction[]> {
    const { data, error } = await supabase.functions.invoke('places', {
      body: {
        path: 'autocomplete',
        data: { input }
      }
    });

    if (error) throw error;
    return data.predictions;
  }

  static async getPlaceDetails(placeId: string): Promise<PlaceDetails> {
    const { data, error } = await supabase.functions.invoke('places', {
      body: {
        path: 'placeDetails',
        data: { placeId }
      }
    });

    if (error) throw error;
    return data.result;
  }
}

export default GoogleMapsService;
