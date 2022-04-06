import { APIService } from './APIService';
import { BlockchainSlotsService } from './blockchain-slots/BlockchainSlotsService';
import { IBlockchainSlotsService } from './blockchain-slots/IBlockchainSlotsService';
import { IAPIService } from './IAPIService';

const blockchainSlotsService: IBlockchainSlotsService = new BlockchainSlotsService();
export const api: IAPIService = new APIService(blockchainSlotsService, undefined as any);
