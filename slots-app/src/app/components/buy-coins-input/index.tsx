import { FunctionExecutor } from '../../common/utils/FunctionExecutor';
import { api } from '../../services';
import CustomButton, { ButtonColorType } from '../custom-button';

function BuyCoinsInput() {
  const buy = async () => {
    await FunctionExecutor.execute(api.slots.buyCoins.bind(api.slots, 10), {
      needShowLoader: true,
    });
  };

  return (
    <div>
      <CustomButton text={'Buy coins'} colorType={ButtonColorType.BASE} handleClick={buy} />
    </div>
  );
}

export default BuyCoinsInput;
