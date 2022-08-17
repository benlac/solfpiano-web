import { useEffect, useState } from 'react';
import { useStore } from '../store/store';
import Selectors from '../components/Selectors';
import SheetMusic from '../components/SheetMusic';
import { levels, upKeyY, downkeyY } from '../helpers/levels';
import randomArrayInRange, { generateMultipleValues } from '../helpers/utils';
import Header from '../components/Header';
import GameContent from '../components/GameContent';

function Game() {
  //TODO autoriser le mode landscape uniquement sur mobile quand le jeu est lancé
  const [upKey, setUpKey] = useState<Array<number>>([]);
  const [downKey, setDownKey] = useState<Array<number>>([]);
  const [{ parameters }, dispatch] = useStore();

  const currentNotes = () => {
    if (parameters.level && parameters.exercice) {
      // Get the current note to play
      const currentKey = levels[parameters.level][parameters.exercice];
      // Generation of 20 scores per key, based on the scores of the current level
      const currentKeyUp = generateMultipleValues(currentKey.upKey);
      const currentKeyDown = generateMultipleValues(currentKey.downKey);

      // note positions in the treble key
      let resUp: Array<number> = [];

      // name of the notes of the treble key
      let stringKeyUp: Array<string> = [];

      // Loop through the current key of the treble key and store position and name in two differente variable
      currentKeyUp.map((el: any) => {
        resUp = [...resUp, upKeyY[el].y];
        stringKeyUp = [...stringKeyUp, upKeyY[el].name];
      });

      // note positions in the F key
      let resDown: Array<number> = [];

      // storage of the name of the notes of the current level
      let stringKeyDown: Array<string> = [];

      // Loop through the current key of the treble key and store position and name in two differente variable
      currentKeyDown.map((el: any) => {
        resDown = [...resDown, downkeyY[el].y];
        stringKeyDown = [...stringKeyDown, downkeyY[el].name];
      });

      // Creation of an array with the notes of the treble and bass clef, in the order they should be played
      let result = currentKeyDown
        .map((element: any, index: number) => [
          downkeyY[element]?.name,
          upKeyY[currentKeyUp[index]]?.name,
        ])
        .flat();
      setDownKey(resDown);
      dispatch({ type: 'SET_KEY_TO_PLAY', payload: result });
      setUpKey(resUp);
    }
  };

  useEffect(() => {
    currentNotes();
  }, [parameters]);

  return (
    <>
      <Header />
      <GameContent />
      <div className="flex justify-center flex-col items-center bg-white mt-2">
        <Selectors />
        {parameters.level !== 0 &&
          parameters.exercice !== 0 &&
          parameters.speed !== 0 && (
            <SheetMusic upKey={upKey} downKey={downKey} />
          )}
      </div>
    </>
  );
}

export default Game;
