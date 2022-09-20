import React from 'react';
import './index.css';
import App from './components/App';
import AppProvider from './providers/AppProvider';
import { VisibilityProvider } from './providers/VisibilityProvider';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './app/store';

const root = createRoot(document.getElementById('root')!);

root.render(
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
