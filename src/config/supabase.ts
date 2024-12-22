import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

// Helper functions for database operations
export const db = {
  // Businesses
  async createBusiness(businessData: Database['public']['Tables']['businesses']['Insert']) {
    const { data, error } = await supabase
      .from('businesses')
      .insert([businessData])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async getBusiness(id: string) {
    const { data, error } = await supabase.from('businesses').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
  },

  // Reviews
  async getBusinessReviews(businessId: string) {
    const { data: reviews, error } = await supabase
      .from('reviews')
      .select(
        `
        *,
        platform:review_platforms(name)
      `
      )
      .eq('business_id', businessId)
      .order('review_date', { ascending: false });
    if (error) throw error;
    return reviews;
  },

  async createReview(reviewData: Database['public']['Tables']['reviews']['Insert']) {
    const { data, error } = await supabase.from('reviews').insert([reviewData]).select().single();
    if (error) throw error;
    return data;
  },

  // Platform Connections
  async getPlatformConnections(businessId: string) {
    const { data: connections, error } = await supabase
      .from('platform_connections')
      .select(
        `
        *,
        platform:review_platforms(*)
      `
      )
      .eq('business_id', businessId);
    if (error) throw error;
    return connections;
  },

  async updatePlatformConnection(
    id: string,
    connectionData: Partial<Database['public']['Tables']['platform_connections']['Update']>
  ) {
    const { data, error } = await supabase
      .from('platform_connections')
      .update(connectionData)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
};
