import type { BusinessOverview, BusinessSearchResult } from './business';

export interface ReviewStats {
  totalReviews: number;
  averageRating: number;
  platformStats: {
    [key: string]: {
      count: number;
      averageRating: number;
    };
  };
  connectedPlatforms: number;
}

export interface PlatformConnection {
  id: string;
  business_id: string;
  platform_name: string;
  platform_id: string;
  is_connected: boolean;
  last_synced?: string;
}

export interface ReviewService {
  searchBusiness(placeDetails: BusinessSearchResult): Promise<{ id: string }>;
  getBusinessOverview(businessId: string | null): Promise<BusinessOverview | null>;
  getBusinessReviews: (businessId: string) => Promise<BusinessOverview['reviews']>;
  getPlatformConnections(businessId: string): Promise<PlatformConnection[]>;
  connectPlatform(businessId: string, platformId: string): Promise<void>;
  disconnectPlatform(businessId: string, platformId: string): Promise<void>;
  updatePlatformConnection: (businessId: string, platformId: string, connectionData: Partial<PlatformConnection>) => Promise<void>;
}
