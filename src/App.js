import React, { useState } from 'react';
import { ThemedButton } from './components/ThemedButton';
import { LIGHT, DARK } from './components/Style';

export const ThemeContext = React.createContext();

const light = {
  backgroundColor: LIGHT
}

const dark = {
  backgroundColor: DARK
}

function App() {
  const [theme, setTheme] = useState(light);

  const changeTheme = () => {
    setTheme( theme === light ? dark : light);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => changeTheme()}>Alterar tema</button>
      <ThemedButton />
    </ThemeContext.Provider>
  )
}

export default App;