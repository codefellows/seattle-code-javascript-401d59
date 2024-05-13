import { useContext } from 'react';
import { ThemeContext } from '../../context/Theme';


export default function ToggleThemeButton() {

  let themeState = useContext(ThemeContext);

  return (
    <button onClick={() => themeState.toggleMode()}>Toggle Theme</button>
  )

}