import { useState } from 'react';
import SpinButton from '../../components/spin-button';
import OneOrTwo from '../games/one-or-two';
import styles from './styles.module.scss';

function Game() {
  const [spinig, setSpinig] = useState<boolean>(false);

  return (
    <div className={styles.main}>
      <OneOrTwo spinig={spinig} />
      <div className={styles.buttons}>
        <SpinButton spinig={spinig} setSpinig={setSpinig} />
      </div>
    </div>
  );
}

export default Game;
