import { useEffect, useState } from 'react';
import { FunctionExecutor } from '../common/utils/FunctionExecutor';
import Spinner from '../components/spinner';
import Header from '../components/header';
import Slot from './slot';

function App() {
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    const subscription = FunctionExecutor.load.subscribe((value) => loadHandler(value));
    return () => subscription.unsubscribe();
  }, []);

  const loadHandler = (load: boolean) => {
    setLoad(load);
  };

  return (
    <div>
      {load && <Spinner />}
      <Header />
      <Slot />
    </div>
  );
}

export default App;
