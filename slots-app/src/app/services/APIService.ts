import { IAnalyticsService } from './analytics/IAnalyticsService';
import { IBlockchainSlotsService } from './blockchain-slots/IBlockchainSlotsService';
import { IAPIService } from './IAPIService';

export class APIService implements IAPIService {
  constructor(private readonly _slots: IBlockchainSlotsService, private readonly _analytics: IAnalyticsService) {}

  public get analytics(): IAnalyticsService {
    return this._analytics;
  }

  public get slots(): IBlockchainSlotsService {
    return this._slots;
  }
}
