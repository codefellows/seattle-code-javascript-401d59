import { createContext, useState } from 'react';

export const ThemeContext = createContext({});

export default function ThemeProvider({children}) {

  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    if (mode  === 'light') {
      setMode('dark')
    } else {
      setMode('light');
    }
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}