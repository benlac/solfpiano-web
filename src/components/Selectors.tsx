import React from 'react';
import { useStore } from '../store/store';
import SelectComponent from './SelectComponent';

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
  const [{ parameters }, dispatch] = useStore();
  useStore;
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
        >
          Start
        </button>
      )}
    </div>
  );
}

export default Selectors;
