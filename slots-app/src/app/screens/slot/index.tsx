import Game from '../../components/game';
import styles from './styles.module.scss';
function Slot() {
  return (
    <div className={styles.main}>
      <Game />
    </div>
  );
}

export default Slot;
