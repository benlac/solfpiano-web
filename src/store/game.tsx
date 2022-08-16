import { StateGame, Action } from '../types/store/game';

// Initial State
export const gameInitialState: StateGame = {
  playing: false,
  keyToPlay: [],
  count: 0,
};

// game Reducer
export const gameReducer = (state = gameInitialState, action: Action) => {
  switch (action.type) {
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.payload,
      };
    case 'SET_KEY_TO_PLAY':
      return {
        ...state,
        keyToPlay: action.payload,
      };
    case 'SET_COUNT':
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
