import { supabase } from '../config/supabase';
import type { BusinessSearchResult, BusinessOverview, Review } from '../types/business';
import type { ReviewService, PlatformConnection } from '../types/reviewService';

interface PlatformStats {
  [key: string]: {
    count: number;
    averageRating: number;
  };
}

class ReviewServiceImpl implements ReviewService {
  async searchBusiness(placeDetails: BusinessSearchResult): Promise<{ id: string }> {
    try {
      // First, check if business already exists
      const { data: existingBusiness } = await supabase
        .from('businesses')
        .select('id')
        .eq('google_place_id', placeDetails.place_id)
        .single();

      if (existingBusiness) {
        return { id: existingBusiness.id };
      }

      // Create new business
      const businessData = {
        name: placeDetails.name,
        google_place_id: placeDetails.place_id,
        address: placeDetails.formatted_address,
        phone: placeDetails.formatted_phone_number,
        website: placeDetails.url,
      };

      const { data: newBusiness, error } = await supabase
        .from('businesses')
        .insert([businessData])
        .select()
        .single();

      if (error) throw error;

      // Save reviews if available
      if (placeDetails.reviews) {
        const { data: platform } = await supabase
          .from('review_platforms')
          .select()
          .eq('platform_key', 'google')
          .single();

        if (platform) {
          const reviews = placeDetails.reviews.map(review => ({
            business_id: newBusiness.id,
            platform_id: platform.id,
            reviewer_name: review.author_name,
            rating: review.rating,
            review_text: review.text,
            review_date: new Date(review.time * 1000).toISOString(),
            platform_review_id: review.time.toString() + '_' + review.author_name,
          }));

          await supabase.from('reviews').insert(reviews);
        }
      }

      return { id: newBusiness.id };
    } catch (error) {
      console.error('Error in searchBusiness:', error);
      throw new Error('Failed to search business');
    }
  }

  async getBusinessOverview(businessId: string | null): Promise<BusinessOverview | null> {
    if (!businessId) return null;

    try {
      const [businessData, reviews, connections] = await Promise.all([
        supabase.from('businesses').select('*').eq('id', businessId).single(),
        this.getBusinessReviews(businessId),
        this.getPlatformConnections(businessId),
      ]);

      const totalReviews = reviews.length;
      const averageRating =
        reviews.reduce((acc, review) => acc + Number(review.rating), 0) / totalReviews;
      const platformStats = this.calculatePlatformStats(reviews);

      return {
        ...businessData.data,
        reviews,
        totalReviews,
        averageRating: averageRating || 0,
        platformStats,
        connectedPlatforms: connections.filter(c => c.is_connected).length,
      };
    } catch (error) {
      console.error('Error in getBusinessOverview:', error);
      throw new Error('Failed to get business overview');
    }
  }

  async getBusinessReviews(businessId: string): Promise<Review[]> {
    try {
      const { data: reviews, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('business_id', businessId);

      if (error) throw error;
      return reviews;
    } catch (error) {
      console.error('Error in getBusinessReviews:', error);
      throw new Error('Failed to get business reviews');
    }
  }

  async getPlatformConnections(businessId: string): Promise<PlatformConnection[]> {
    try {
      const { data: connections, error } = await supabase
        .from('platform_connections')
        .select('*')
        .eq('business_id', businessId);

      if (error) throw error;
      return connections;
    } catch (error) {
      console.error('Error in getPlatformConnections:', error);
      throw new Error('Failed to get platform connections');
    }
  }

  private calculatePlatformStats(reviews: Review[]): PlatformStats {
    const platformStats: PlatformStats = {};

    if (!reviews || reviews.length === 0) {
      return platformStats;
    }

    reviews.forEach(review => {
      const platformName = review.platform.name.toLowerCase();
      if (!platformStats[platformName]) {
        platformStats[platformName] = {
          count: 0,
          averageRating: 0
        };
      }
      platformStats[platformName].count += 1;
      platformStats[platformName].averageRating = 
        (platformStats[platformName].averageRating * (platformStats[platformName].count - 1) + review.rating) / 
        platformStats[platformName].count;
    });

    return platformStats;
  }

  async connectPlatform(businessId: string, platformId: string): Promise<void> {
    try {
      const { error } = await supabase.from('platform_connections').insert([
        {
          business_id: businessId,
          platform_id: platformId,
          status: 'connected',
        },
      ]);

      if (error) throw error;
    } catch (error) {
      console.error('Error in connectPlatform:', error);
      throw new Error('Failed to connect platform');
    }
  }

  async disconnectPlatform(businessId: string, platformId: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('platform_connections')
        .delete()
        .match({ business_id: businessId, platform_id: platformId });

      if (error) throw error;
    } catch (error) {
      console.error('Error in disconnectPlatform:', error);
      throw new Error('Failed to disconnect platform');
    }
  }

  async updatePlatformConnection(
    businessId: string,
    platformId: string,
    connectionData: Partial<PlatformConnection>
  ): Promise<void> {
    try {
      const { error } = await supabase
        .from('platform_connections')
        .update(connectionData)
        .match({ business_id: businessId, platform_id: platformId });

      if (error) throw error;
    } catch (error) {
      console.error('Error in updatePlatformConnection:', error);
      throw new Error('Failed to update platform connection');
    }
  }
}

export const reviewService = new ReviewServiceImpl();
