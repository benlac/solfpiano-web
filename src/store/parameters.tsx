import { StateParameters, Action } from '../types/store/parameters';

// Initial State
export const parametersInitialState: StateParameters = {
  level: 1,
  exercice: 1,
  speed: 0,
};

// parameters Reducer
export const parametersReducer = (
  state = parametersInitialState,
  action: Action
) => {
  switch (action.type) {
    case 'SET_LEVEL':
      return {
        ...state,
        level: action.payload,
      };
    case 'SET_EXERCICE':
      return {
        ...state,
        exercice: action.payload,
      };
    case 'SET_SPEED':
      return {
        ...state,
        speed: action.payload,
      };
    default:
      return state;
  }
};
