import React, { useEffect } from 'react';
import { useStore } from '../store/store';
import SelectComponent from './SelectComponent';
import toc_metronome from '../assets/audio/toc_metronome.mp3';
import oneSong from '../assets/audio/un.mp3';
import twoSong from '../assets/audio/deux.mp3';
import doSong from '../assets/audio/do-k.mp3';
import reSong from '../assets/audio/re-k.mp3';
import solSong from '../assets/audio/sol-k.mp3';
import miSong from '../assets/audio/mi-k.mp3';
import laSong from '../assets/audio/la-k.mp3';
import siSong from '../assets/audio/si-k.mp3';
import faSong from '../assets/audio/fa-k.mp3';
import useInterval from '../hooks/useInterval';
import { levels as listLevels } from '../helpers/levels';

const levels = new Array(31).fill(0).map((_, i) => ({
  value: i + 1,
  label: `Level ${i + 1}`,
}));

const exercices = [
  { value: 1, label: 'Exercice 1' },
  { value: 2, label: 'Exercice 2' },
  { value: 3, label: 'Exercice 3' },
];

function Selectors() {
  const [{ parameters, game }, dispatch] = useStore();
  const metronome = new Audio(toc_metronome);
  const un_ = new Audio(oneSong);
  const two_ = new Audio(twoSong);
  const do_ = new Audio(doSong);
  const re_ = new Audio(reSong);
  const mi_ = new Audio(miSong);
  const fa_ = new Audio(faSong);
  const sol_ = new Audio(solSong);
  const la_ = new Audio(laSong);
  const si_ = new Audio(siSong);

  useInterval(
    () => {
      dispatch({ type: 'SET_COUNT', payload: game.count + 1 });
      metronome.play();
      if (game.count === 0) {
        un_.play();
      } else if (game.count === 1) {
        two_.play();
      } else {
        switch (game.keyToPlay[game.count - 2]) {
          case 'do_':
            return do_.play();
          case 're_':
            return re_.play();
          case 'mi_':
            return mi_.play();
          case 'fa_':
            return fa_.play();
          case 'sol_':
            return sol_.play();
          case 'la_':
            return la_.play();
          case 'si_':
            return si_.play();
          default:
            return null;
        }
      }
    },
    game.playing ? (60 / parameters.speed) * 1000 : null
  );

  useEffect(() => {
    if (game.count >= 42) {
      dispatch({ type: 'SET_PLAYING', payload: false });
      dispatch({ type: 'SET_COUNT', payload: 0 });
    }
  }, [game.count]);

  return (
    <div>
      <h1>Choose your level</h1>
      <SelectComponent
        data={levels}
        placeholder={parameters.level}
        handleChange={(e) => dispatch({ type: 'SET_LEVEL', payload: e.value })}
        isDisabled={false}
      />
      <h1>Choose your exercice</h1>
      <SelectComponent
        data={exercices}
        placeholder={parameters.exercice}
        handleChange={(e) =>
          dispatch({ type: 'SET_EXERCICE', payload: e.value })
        }
        isDisabled={parameters.level === 0}
      />
      <h1>Choose your speed</h1>
      <SelectComponent
        data={listLevels[parameters.level][parameters.exercice].speedLimits.map(
          (el: number) => ({ value: el, label: el })
        )}
        placeholder={parameters.speed}
        handleChange={(e) => dispatch({ type: 'SET_SPEED', payload: e.value })}
        isDisabled={parameters.level === 0}
      />
      {parameters.level !== 0 &&
        parameters.exercice !== 0 &&
        parameters.speed !== 0 && (
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
