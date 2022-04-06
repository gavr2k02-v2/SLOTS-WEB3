import { AnalyticsType } from '../enums/AnalyticsType';
import { SpinAnalyticsPayload } from './SpinAnalyticsPayload';
import { UpdateCoinsAnalyticsPayload } from './UpdateCoinsAnalyticsPayload';

export type AnalyticsPayload = {
  address: string;
  type: AnalyticsType;
  data: SpinAnalyticsPayload | UpdateCoinsAnalyticsPayload;
};
