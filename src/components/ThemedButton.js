import React from 'react';
import { ThemeContext } from "../App";

export function ThemedButton(props) {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <label style={{ backgroundColor: theme.backgroundColor }}>
            Meu botão
          </label>
        )}
      </ThemeContext.Consumer>
    );
  }