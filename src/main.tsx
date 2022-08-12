import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider, useStore } from './store/store';
import App from './App';
import './assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
