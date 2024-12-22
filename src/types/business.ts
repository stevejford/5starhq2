export interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  platform: {
    name: string;
    id: string;
  };
}

export interface OpeningHours {
  periods: Array<{
    open: { day: number; time: string };
    close: { day: number; time: string };
  }>;
  weekday_text: string[];
}

export interface BusinessOverview {
  id: string;
  name: string;
  formatted_address: string;
  formatted_phone_number?: string;
  international_phone_number?: string;
  rating?: number;
  user_ratings_total?: number;
  website?: string;
  url?: string;
  reviews?: Review[];
  opening_hours?: OpeningHours;
  place_id: string;
  types: string[];
  totalReviews?: number;
  averageRating?: number;
  platformStats?: {
    [key: string]: {
      count: number;
      averageRating: number;
    };
  };
  connectedPlatforms?: number;
}

export interface BusinessSearchResult {
  id: string;
  place_id: string;
  name: string;
  formatted_address: string;
  formatted_phone_number?: string;
  international_phone_number?: string;
  rating?: number;
  user_ratings_total?: number;
  website?: string;
  url?: string;
  reviews?: Review[];
  latitude?: number;
  longitude?: number;
  types: string[];
}
