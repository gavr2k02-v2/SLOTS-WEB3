import { useEffect, useState } from 'react';
import { FunctionExecutor } from '../../common/utils/FunctionExecutor';
import { api } from '../../services';
import { ContractFactory } from '../../services/conract-factory/ContractFactory';
import BuyCoinsInput from '../buy-coins-input';
import styles from './styles.module.scss';
function Header() {
  const [coins, setCoins] = useState<number>(0);
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    init();
    const subscription = api.slots.coins.subscribe((value) => coinsHandler(value));
    return () => subscription.unsubscribe();
  }, []);

  const init = async () => {
    const { success, data } = await FunctionExecutor.execute(ContractFactory.getAccount, {
      needShowLoader: true,
    });
    success && setAddress(data as string);
  };

  const coinsHandler = (coins: number) => {
    setCoins(coins);
  };

  return (
    <div className={styles.header}>
      <div className={`${styles.item} ${styles.address}`}>
        <div className={styles.label}>Address:</div> {address}
      </div>
      <div className={`${styles.item} ${styles.coins}`}>
        <div className={styles.label}>Coins:</div> {coins}
      </div>
      <BuyCoinsInput />
    </div>
  );
}

export default Header;
