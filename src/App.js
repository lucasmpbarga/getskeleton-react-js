import React from 'react';
import phone from './images/iphone.png'
// import React, { useState } from 'react';
// import { LIGHT, DARK } from './components/Style';

export const ThemeContext = React.createContext();

// const light = {
//   backgroundColor: LIGHT
// }

// const dark = {
//   backgroundColor: DARK
// }

function App() {
  // const [theme, setTheme] = useState(light);

  // const changeTheme = () => {
  //   setTheme( theme === light ? dark : light);
  // }

  return (
    // <ThemeContext.Provider value={theme}>
    //   <button onClick={() => changeTheme()}>Alterar tema</button>
    //   <ThemedButton />
    // </ThemeContext.Provider>


    <div className="section hero">
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h4 className="hero-heading">Stop coding non-responsive sites. Let users view sites from anywhere.</h4>
            <a className="button button-primary" href="http://getskeleton.com">Try Skeleton</a>
          </div>
          <div className="one-half column phones">
            <img className="phone" src={phone} alt="Phone" />
            <img className="phone" src={phone} alt="Phone" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;