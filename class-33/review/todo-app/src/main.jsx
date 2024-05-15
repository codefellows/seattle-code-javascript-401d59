import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/Settings';
import ItemsProvider from './Context/Items';
import { MantineProvider } from '@mantine/core';


import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <SettingsProvider>
        <ItemsProvider>
          <App />
        </ItemsProvider >
      </SettingsProvider >
    </MantineProvider >
  </React.StrictMode>
);
