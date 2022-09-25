import React from 'react';
import PropTypes from 'prop-types';

import BackgroundImage from '../assets/authentication_cover.jpeg';
import {
  Wrapper, ImageWrapper, Image, LoginWrapper, Container,
} from './style';

/**
 * `Authentication` is a parent component for Login and Signup components
 * @param {Node} children
 * @returns AuthenticationJSX
 */
function Authentication({ children }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={BackgroundImage} alt='bg_image' />
        <LoginWrapper>
          <Container>{children}</Container>
        </LoginWrapper>
      </ImageWrapper>
    </Wrapper>
  );
}

Authentication.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Authentication;
