import { IAnalyticsService } from './analytics/IAnalyticsService';
import { IBlockchainSlotsService } from './blockchain-slots/IBlockchainSlotsService';

export interface IAPIService {
  readonly analytics: IAnalyticsService;
  readonly slots: IBlockchainSlotsService;
}
