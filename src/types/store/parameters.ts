export type State = {
  level: number;
  exercice: number;
};

export type Action =
  | { type: 'SET_LEVEL'; payload: number }
  | { type: 'SET_EXERCICE'; payload: number };

export type Context = [store: Store, dispatch: (action: Action) => void];

export type Store = {
  parameters: State;
};
