import { useQuery } from '@tanstack/react-query';
import { reviewService } from '../services/reviewService';
import type { BusinessOverview } from '../types/business';

export function useReviewService() {
  const getBusinessOverview = (businessId: string | null) => {
    return useQuery<BusinessOverview | null>({
      queryKey: ['businessOverview', businessId],
      queryFn: () => reviewService.getBusinessOverview(businessId),
      enabled: !!businessId,
    });
  };

  return {
    getBusinessOverview,
  };
}
