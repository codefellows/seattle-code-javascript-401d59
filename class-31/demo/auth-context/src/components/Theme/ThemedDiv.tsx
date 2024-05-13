import React, { useContext } from 'react';
import { ThemeContext } from '../../context/Theme';

import './theme.css';

export default function ThemedDiv({ children }): React.ReactElement {

  let themeState = useContext(ThemeContext);
  console.log(themeState);
  return (
    <div className={themeState.mode}>
      {children}
    </div>
  )
}