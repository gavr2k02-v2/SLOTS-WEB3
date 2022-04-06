import { SLOT_ABI } from '../ABIs/SlotABI';
import { ContractFactory } from '../conract-factory/ContractFactory';
import { IBlockchainSlotsService } from './IBlockchainSlotsService';
import env from 'react-dotenv';
import { Observable, Subject } from 'rxjs';

export class BlockchainSlotsService implements IBlockchainSlotsService {
  private readonly _contract;
  private _price: number = 0;
  private _coins: number = 0;

  private readonly _coinsSubject: Subject<number> = new Subject();
  public readonly coins: Observable<number> = this._coinsSubject;

  constructor() {
    this._contract = ContractFactory.getContract(SLOT_ABI, env.ADDRESS_SLOT_CONTRACT);
    this.getCoins();
  }

  public async spin(): Promise<void> {
    const from = await ContractFactory.getAccount();
    await this._contract.methods.spin().send({ from });
    await this.getCoins();
  }

  public async getCoins(): Promise<number> {
    this._coins = await this._contract.methods.getCoins().call();
    this._coinsSubject.next(this._coins);
    return this._coins;
  }

  public async buyCoins(count: number): Promise<void> {
    const price = await this.getPrice();
    const from = await ContractFactory.getAccount();
    const params = { value: price * count, from };
    this._coins = await this._contract.methods.buyCoins().send(params);
    await this.getCoins();
  }

  private async getPrice(): Promise<number> {
    if (this._price === 0) {
      this._price = await this._contract.methods.getPrice().call();
    }
    return this._price;
  }
}
