import React from 'react';
import { Tabs } from '@mantine/core';
import '@mantine/core/styles.css'

import Todo from './Components/Todo';
import SettingsPage from './Components/Settings';

export default class App extends React.Component {

  render() {
    return (

      <Tabs variant="outline" defaultValue="settings"> {/* CHANGE DEFAULT TAB HERE */}
        <Tabs.List>
          <Tabs.Tab value="home">
            Home
          </Tabs.Tab>
          <Tabs.Tab value="settings">
            Settings
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="home">
          <Todo />
        </Tabs.Panel>
        <Tabs.Panel value="settings">
          <SettingsPage />
        </Tabs.Panel>
      </Tabs>

    );
  }
}
