import React, { createContext, useContext, useReducer } from 'react';
import { Action, Context, Store } from '../types/store/parameters';
import { parametersReducer, parametersInitialState } from './parameters';

type Props = {
  children: React.ReactNode;
};

// React context for store
const StoreContext = createContext({} as Context);

// Combine initial states
const initalStore = {
  parameters: parametersInitialState,
};

// Combine reducers
const reducers = (store: Store, action: Action) => ({
  parameters: parametersReducer(store.parameters, action),
});

// Store context provider
export function StoreProvider(props: Props) {
  const { children } = props;
  return (
    <StoreContext.Provider value={useReducer(reducers, initalStore)}>
      {children}
    </StoreContext.Provider>
  );
}

// React hook for consuming store
export const useStore = () => useContext(StoreContext);
