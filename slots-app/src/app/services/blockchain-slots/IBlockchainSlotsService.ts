import { Observable } from 'rxjs';

export interface IBlockchainSlotsService {
  readonly coins: Observable<number>;

  spin(): Promise<void>;
  getCoins(): Promise<number>;
  buyCoins(count: number): Promise<void>;
}
