import { useEffect, useState } from 'react';
import { api } from '../../../services';
import styles from './styles.module.scss';

interface IOneOrTwoProps {
  spinig: boolean;
}

enum GameState {
  WIN = 'win',
  LOSE = 'lose',
}
function OneOrTwo({ spinig }: IOneOrTwoProps) {
  const [coins, setCoins] = useState<number>(0);
  const [state, setState] = useState<GameState>(GameState.WIN);
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);

  useEffect(() => {
    const subscription = api.slots.coins.subscribe((value) => coinsHandler(value));
    return () => subscription.unsubscribe();
  });

  const coinsHandler = (value: number) => {
    setState(value > coins ? GameState.WIN : GameState.LOSE);
    setCoins(value);
  };

  const updateNumbers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    setFirstNumber(+!firstNumber);
    setSecondNumber(firstNumber);
  };

  spinig && updateNumbers();

  return (
    <div className={styles.main}>
      <div className={styles.numbers}>
        {[firstNumber, secondNumber].map((item, index) => (
          <div className={getStyles(state)} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function getStyles(state: GameState) {
  switch (state) {
    case GameState.WIN:
      return `${styles.item} ${styles.win}`;
    case GameState.LOSE:
      return `${styles.item} ${styles.lose}`;
    default:
      return styles.item;
  }
}

export default OneOrTwo;
