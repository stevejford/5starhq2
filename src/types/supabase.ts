export interface Database {
  public: {
    Tables: {
      businesses: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          place_id: string;
          formatted_address: string;
          formatted_phone_number?: string;
          international_phone_number?: string;
          rating?: number;
          user_ratings_total?: number;
          website?: string;
          url?: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          place_id: string;
          formatted_address: string;
          formatted_phone_number?: string;
          international_phone_number?: string;
          rating?: number;
          user_ratings_total?: number;
          website?: string;
          url?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          place_id?: string;
          formatted_address?: string;
          formatted_phone_number?: string;
          international_phone_number?: string;
          rating?: number;
          user_ratings_total?: number;
          website?: string;
          url?: string;
        };
      };
      reviews: {
        Row: {
          id: string;
          created_at: string;
          business_id: string;
          author_name: string;
          rating: number;
          text: string;
          time: number;
          relative_time_description: string;
          platform: {
            name: string;
            id: string;
          };
        };
        Insert: {
          id?: string;
          created_at?: string;
          business_id: string;
          author_name: string;
          rating: number;
          text: string;
          time: number;
          relative_time_description: string;
          platform: {
            name: string;
            id: string;
          };
        };
        Update: {
          id?: string;
          created_at?: string;
          business_id?: string;
          author_name?: string;
          rating?: number;
          text?: string;
          time?: number;
          relative_time_description?: string;
          platform?: {
            name: string;
            id: string;
          };
        };
      };
      platform_connections: {
        Row: {
          id: string;
          created_at: string;
          business_id: string;
          platform_name: string;
          platform_id: string;
          is_connected: boolean;
          last_synced?: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          business_id: string;
          platform_name: string;
          platform_id: string;
          is_connected: boolean;
          last_synced?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          business_id?: string;
          platform_name?: string;
          platform_id?: string;
          is_connected?: boolean;
          last_synced?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
