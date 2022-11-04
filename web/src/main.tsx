import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import AppProvider from './providers/AppProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './app/store';
import App from './components/App';

import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AppProvider>
        <VisibilityProvider>
          <App />
        </VisibilityProvider>
      </AppProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
