import React from 'react';

import { AuthProvider } from './context/AuthContext';
import { MoviesProvider } from './context/MoviesContext';
import RoutesComponent from './Routes/routes';

/**
 * `App` component is the component that holds the rest of the components
 * @returns AppJSX
 */
function App() {
  return (
    <AuthProvider>
      <MoviesProvider>
        <RoutesComponent />
      </MoviesProvider>
    </AuthProvider>
  );
}

export default App;
