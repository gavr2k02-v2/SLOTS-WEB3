import { FunctionExecutor } from '../../common/utils/FunctionExecutor';
import { api } from '../../services';
import CustomButton, { ButtonColorType } from '../custom-button';

interface ISpinButtonProps {
  spinig: boolean;
  setSpinig: (value: boolean) => void;
}

function SpinButton({ spinig, setSpinig }: ISpinButtonProps) {
  const spin = async () => {
    setSpinig(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await FunctionExecutor.execute(api.slots.spin.bind(api.slots));
    setSpinig(false);
  };

  return <CustomButton text={'Spin'} colorType={ButtonColorType.BASE} handleClick={spin} disabled={spinig} />;
}

export default SpinButton;
