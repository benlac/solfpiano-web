import { useEffect, useState } from 'react';
import { StoreProvider, useStore } from './store/store';
import Selectors from './components/Selectors';
import SheetMusic from './components/SheetMusic';
import { levels, upKeyY } from './helpers/levels';

function App() {
  const [upKey, setUpKey] = useState<Array<number>>([]);
  const [{ parameters }, dispatch] = useStore();

  const currentNotes = () => {
    if (parameters.level && parameters.exercice) {
      const currentKey = levels[parameters.level][parameters.exercice];
      // setUpKey()
      let res: Array<number> = [];
      currentKey.upKey.map((el: any) => {
        res = [...res, upKeyY[el].y];
      });
      setUpKey(res);
      console.log(upKeyY);
      console.log(currentKey);
    }
  };
  useEffect(() => {
    currentNotes();
  }, [parameters]);
  return (
    <div className="flex justify-center flex-col items-center bg-white">
      <h1>Solfpiano</h1>
      <Selectors />
      {parameters.level !== 0 && parameters.exercice !== 0 && (
        <SheetMusic upKey={upKey} />
      )}
    </div>
  );
}

export default App;
