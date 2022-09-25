import React from 'react';

import { useAuth } from '../context/AuthContext';
import { theme } from '../Themes/Themes';
import { Wrapper, ColorBox } from './style';

/**
 * `ThemeWrapper` is used to display the themes for the user
 * @returns ThemeWrapperJSX
 */
function ThemeWrapper() {
  const { setSelectedTheme } = useAuth();
  return (
    <Wrapper>
      {
        Object.keys(theme).map((val) => (
          <ColorBox
            onClick={() => setSelectedTheme({ ...theme[val] })}
            key={val}
            displayTheme={theme[val].backgroundColor}
          />
        ))
      }
    </Wrapper>
  );
}

export default ThemeWrapper;
