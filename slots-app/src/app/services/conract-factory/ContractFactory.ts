import env from 'react-dotenv';
import Web3 from 'web3';

export abstract class ContractFactory {
  private static _web3: Web3 = new Web3(Web3.givenProvider || env.LOCAL_PROVIDER);

  public static getContract(ABI: any, address: string) {
    return new ContractFactory._web3.eth.Contract(ABI, address);
  }

  public static getAccounts(): Promise<string[]> {
    return ContractFactory._web3.eth.requestAccounts();
  }

  public static async getAccount(): Promise<string> {
    const [address] = await ContractFactory._web3.eth.getAccounts();
    return address;
  }
}
