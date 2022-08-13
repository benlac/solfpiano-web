export type StateGame = {
  playing: boolean;
  keyToPlay: Array<string>;
  currentDownKey: Array<string>;
  count: number;
};

export type Action =
  | { type: 'SET_PLAYING'; payload: boolean }
  | { type: 'SET_KEY_TO_PLAY'; payload: Array<string> }
  | { type: 'SET_CURRENT_DOWN_KEY'; payload: Array<string> }
  | { type: 'SET_COUNT'; payload: number };
