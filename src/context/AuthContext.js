import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';

import { theme } from '../Themes/Themes';

// `AuthContext` is used to create the user context
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

/**
 * `AuthProvider` holds the user details
 * @param {Node} children
 * @returns AuthProviderJSX
 */
export function AuthProvider({ children }) {
  const [selectedTheme, setSelectedTheme] = useState({});

  useEffect(() => {
    setSelectedTheme({ ...theme.lightTheme });
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    selectedTheme,
    setSelectedTheme,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
