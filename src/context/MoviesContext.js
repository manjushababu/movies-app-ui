import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import moviesMock from '../mocks/movies.mock.json';

// `MoviesContext` is used to create the movies context
const MoviesContext = createContext();

export function useMovies() {
  return useContext(MoviesContext);
}

/**
 * `MoviesProvider` holds the available movies data
 * @param {Node} children
 * @returns MoviesProviderJSX
 */
export function MoviesProvider({ children }) {
  const [moviesData, setMoviesData] = useState([...moviesMock]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    moviesData,
    setMoviesData,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}

MoviesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
