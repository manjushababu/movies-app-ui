import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { useAuth } from '../context/AuthContext';
import Header from '../Header/Header';
import { Layout } from './style';

/**
 * `BaseLayout` is the parent component that hold the Header, and defines the Layout
 * @param {Node} children
 * @returns BaseLayoutJSX
 */
function BaseLayout({ children }) {
  const { selectedTheme } = useAuth();

  return (
    <ThemeProvider theme={selectedTheme}>
      <Header />
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
