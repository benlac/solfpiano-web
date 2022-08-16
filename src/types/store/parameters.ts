import { StateGame } from './game';

export type StateParameters = {
  level: number;
  exercice: number;
  speed: number;
};

export type Action =
  | { type: 'SET_LEVEL'; payload: number }
  | { type: 'SET_EXERCICE'; payload: number }
  | { type: 'SET_PLAYING'; payload: boolean }
  | { type: 'SET_KEY_TO_PLAY'; payload: Array<string> }
  | { type: 'SET_CURRENT_DOWN_KEY'; payload: Array<string> }
  | { type: 'SET_COUNT'; payload: number }
  | { type: 'SET_SPEED'; payload: number };

export type Context = [store: Store, dispatch: (action: Action) => void];

export type Store = {
  parameters: StateParameters;
  game: StateGame;
};
