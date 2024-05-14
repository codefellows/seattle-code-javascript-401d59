import { createContext, useState, useEffect } from 'react';

// 1 context object
export const ThemeContext = createContext({});

// 2 Context Provider component
export default function ThemeProvider({ children }) {
  
  const [mode, setMode] = useState('light');
  const [primaryColor, setPrimaryColor] = useState('#89CFF0');
  const [secondaryColor, setSecondaryColor] = useState('#b35500');
  const [error, setError] = useState(null);

  const updatePrimaryColor = (colorValue: string) => {
    if (colorValue === secondaryColor) {
      setError('Not enough contrast');
    } else {
      setPrimaryColor(colorValue);
      localStorage.setItem('theme', JSON.stringify({ primaryColor, secondaryColor }));
    }
  }

  const updateSecondaryColor = (colorValue: string) => {
    if (colorValue === primaryColor) {
      setError('Not enough contrast');
    } else {
      setSecondaryColor(colorValue);
      localStorage.setItem('theme', JSON.stringify({ primaryColor, secondaryColor }));
    }
  }

  useEffect(() => {
    let storedSettings = JSON.parse(localStorage.getItem('theme'));
    console.log(storedSettings);
    if (storedSettings) {
      setPrimaryColor(storedSettings.primaryColor)
      setSecondaryColor(storedSettings.secondaryColor);
    }
  }, []);

  useEffect(() => {
    if (primaryColor !== secondaryColor) {
      setError(null);
    }
  }, [primaryColor, secondaryColor]);

  return (
    <ThemeContext.Provider value={{
      mode,
      error,
      primaryColor,
      secondaryColor,
      updatePrimaryColor,
      updateSecondaryColor
    }}>
      {children}
    </ThemeContext.Provider>
  )
}