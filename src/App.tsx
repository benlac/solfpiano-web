import { useEffect, useState } from 'react';
import { useStore } from './store/store';
import Selectors from './components/Selectors';
import SheetMusic from './components/SheetMusic';
import { levels, upKeyY, downkeyY } from './helpers/levels';
import randomArrayInRange from './helpers/utils';

function App() {
  const [upKey, setUpKey] = useState<Array<number>>([]);
  const [downKey, setDownKey] = useState<Array<number>>([]);
  const [{ parameters }, dispatch] = useStore();

  const currentNotes = () => {
    if (parameters.level && parameters.exercice) {
      const currentKey = levels[parameters.level][parameters.exercice];
      // console.log('ici', randomArrayInRange(1, ['n_102', 'n_103'].length, 20));
      let resUp: Array<number> = [];
      let stringKeyUp: Array<string> = [];
      currentKey.upKey.map((el: any) => {
        resUp = [...resUp, upKeyY[el].y];
        stringKeyUp = [...stringKeyUp, upKeyY[el].name];
      });
      // console.log('downkeyY', downkeyY);

      let resDown: Array<number> = [];
      let stringKeyDown: Array<string> = [];
      currentKey.downKey.map((el: any) => {
        resDown = [...resDown, downkeyY[el].y];
        stringKeyDown = [...stringKeyDown, downkeyY[el].name];
      });

      let result = currentKey.downKey
        .map((element: any, index: number) => [
          downkeyY[element]?.name,
          upKeyY[currentKey.upKey[index]]?.name,
        ])
        .flat();
      console.log('result', result);

      setDownKey(resDown);
      dispatch({ type: 'SET_KEY_TO_PLAY', payload: result });

      setUpKey(resUp);
      // dispatch({ type: 'SET_CURRENT_UP_KEY', payload: stringKeyUp });
      // console.log(upKeyY);
      // console.log(currentKey);
    }
  };

  useEffect(() => {
    currentNotes();
  }, [parameters]);

  console.log('upKEy', upKey);
  console.log('downKey', downKey);
  return (
    <div className="flex justify-center flex-col items-center bg-white">
      <h1>Solfpiano</h1>
      <Selectors />
      {parameters.level !== 0 &&
        parameters.exercice !== 0 &&
        parameters.speed !== 0 && (
          <SheetMusic upKey={upKey} downKey={downKey} />
        )}
    </div>
  );
}

export default App;
