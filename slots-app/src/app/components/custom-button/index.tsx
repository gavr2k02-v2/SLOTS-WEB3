import styles from './styles.module.scss';

export enum ButtonColorType {
  BASE = 'base',
  WARNING = 'warning',
  DANGER = 'danger',
}

interface IButtonProps {
  text: string;
  colorType: ButtonColorType;
  disabled?: boolean;
  handleClick: () => void;
}

function CustomButton({ text, colorType, handleClick, disabled }: IButtonProps) {
  return (
    <button onClick={() => handleClick()} className={`${styles.button} ${styles[disabled ? 'disabled' : colorType]}`}>
      {text}
    </button>
  );
}

export default CustomButton;
