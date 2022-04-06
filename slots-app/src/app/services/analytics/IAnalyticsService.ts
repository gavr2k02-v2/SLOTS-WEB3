import { AnalyticsPayload } from '../../common/analytics/types/AnalyticsPayload';

export interface IAnalyticsService {
  add(payload: AnalyticsPayload): Promise<void>;
}
