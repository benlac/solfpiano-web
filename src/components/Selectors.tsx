import React, { useEffect } from 'react';
import { useStore } from '../store/store';
import SelectComponent from './SelectComponent';
import toc_metronome from '../assets/audio/toc_metronome.mp3';
import doSong from '../assets/audio/do-k.mp3';
import solSong from '../assets/audio/sol-k.mp3';
import useInterval from '../hooks/useInterval';

const levels = [
  { value: 1, label: 'Level 1' },
  { value: 2, label: 'Level 2' },
  { value: 3, label: 'Level 3' },
];

const exercices = [
  { value: 1, label: 'Exercice 1' },
  { value: 2, label: 'Exercice 2' },
  { value: 3, label: 'Exercice 3' },
];

function Selectors() {
  const [{ parameters, game }, dispatch] = useStore();
  const metronome = new Audio(toc_metronome);
  const do_ = new Audio(doSong);
  const sol_ = new Audio(solSong);

  useInterval(
    () => {
      dispatch({ type: 'SET_COUNT', payload: game.count + 1 });
      metronome.play();
      eval(game.keyToPlay[game.count]).play();
    },
    game.playing ? (60 / 60) * 1000 : null
  );

  useEffect(() => {
    if (game.count >= 40) {
      dispatch({ type: 'SET_PLAYING', payload: false });
    }
  }, [game.count]);

  return (
    <div>
      <h1>Choose your level</h1>
      <SelectComponent
        data={levels}
        handleChange={(e) => dispatch({ type: 'SET_LEVEL', payload: e.value })}
        isDisabled={false}
      />
      <h1>Choose your exercice</h1>
      <SelectComponent
        data={exercices}
        handleChange={(e) =>
          dispatch({ type: 'SET_EXERCICE', payload: e.value })
        }
        isDisabled={parameters.level === 0}
      />
      {parameters.level !== 0 && parameters.exercice !== 0 && (
        <button
          className="h-10 px-6 font-semibold rounded-md bg-black text-white"
          type="button"
          onClick={() =>
            dispatch({ type: 'SET_PLAYING', payload: !game.playing })
          }
        >
          {game.playing ? 'Pause' : 'Start'}
        </button>
      )}
    </div>
  );
}

export default Selectors;
