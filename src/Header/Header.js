/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';

import ThemeWrapper from '../ThemeWrapper/ThemeWrapper';
import {
  Wrapper,
  HeadingsWrapper,
  DetailsWrapper,
  SettingsIconWrapper,
  ProfileWrapper,
} from './style';

function Header() {
  const navigate = useNavigate();
  const [showTheme, setShowTheme] = useState(false);

  return (
    <Wrapper>
      <HeadingsWrapper>
        <h3 onClick={() => navigate('/')}>Movies</h3>
        <h3 onClick={() => navigate('/add-movies')}>Post Movies</h3>
        <h3 onClick={() => navigate('/favorites')}>Favorites</h3>
      </HeadingsWrapper>
      <DetailsWrapper>
        <SettingsIconWrapper
          onMouseLeave={() => setShowTheme(false)}
          onMouseOver={() => setShowTheme(true)}
        >
          <SettingsIcon />
          {showTheme && <ThemeWrapper />}
        </SettingsIconWrapper>
        <ProfileWrapper>M</ProfileWrapper>
      </DetailsWrapper>
    </Wrapper>
  );
}

export default Header;
