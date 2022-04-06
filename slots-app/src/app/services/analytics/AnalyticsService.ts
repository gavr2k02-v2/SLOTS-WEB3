import axios from 'axios';
import { AnalyticsPayload } from '../../common/analytics/types/AnalyticsPayload';
import { IAnalyticsService } from './IAnalyticsService';

export class AnalyticsService implements IAnalyticsService {
  private _apiUrl: string;

  constructor() {
    this._apiUrl = 'http://localhost:80/api/analytics';
  }

  public add(payload: AnalyticsPayload): Promise<void> {
    return axios.post(this._apiUrl, payload);
  }
}
