import React from 'react';
import SettingsProvider from './Context/Settings';
import { MantineProvider } from '@mantine/core';

import Todo from './Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      // Provides Mantine styles to child components
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* Provides Settings context values for TODO features!! */}
        <SettingsProvider>
          <Todo />
        </SettingsProvider>
      </MantineProvider> 
    );
  }
}
