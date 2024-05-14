import './App.css';
import '@mantine/core/styles.css';
import { Tabs } from '@mantine/core';
import ThemeProvider from './context/Theme';
import Home from './components/Home/Home';
import ThemeSettings from './components/ThemeSettings/ThemeSettings';

function App() {

  return (
    <ThemeProvider>
      <Tabs defaultValue="home">
        <Tabs.List>
          <Tabs.Tab value="home">
            Home
          </Tabs.Tab>
          <Tabs.Tab value="settings">
            Theme Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="home">
          <Home />
        </Tabs.Panel>

        <Tabs.Panel value="settings">
          <ThemeSettings />
        </Tabs.Panel>
      </Tabs>
    </ThemeProvider>
  )
}

export default App
