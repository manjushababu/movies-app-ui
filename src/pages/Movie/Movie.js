/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { useAuth } from '../../context/AuthContext';
import { useMovies } from '../../context/MoviesContext';
import {
  Wrapper, ImageWrapper, ButtonWrapper, Image, ContentWrapper, TitleWrapper,
  ShowMoreIcon, ShowLessIcon, Title,
  Description, RatingsWrapper, RatingsIcon, CtaSection,
  FavoriteIcon, DeleteIcon,
  EditIcon,
} from './style';

/**
 * `Movie` Displays the Movies Details
 * @param {Object} movie
 * @param {number} index
 * @returns MovieJSX
 */
function Movie({ movie, index }) {
  const { selectedTheme } = useAuth();
  const {
    id,
    url,
    title,
    description,
    ratings,
    favorite,
  } = movie;

  const { moviesData, setMoviesData } = useMovies();
  const navigate = useNavigate();
  const [isShowDesc, setIsShowDesc] = useState(false);
  const [selectMovie, setSelectMovie] = useState(false);
  const highestRating = 5;

  return (
    <Wrapper>
      <ImageWrapper
        onMouseOver={() => setSelectMovie(true)}
        onMouseLeave={() => setSelectMovie(false)}
      >
        <Image src={url} alt={title} />
        { selectMovie
                    && (
                    <ButtonWrapper>
                      <Button onClick={() => navigate(`/movie-detail/${id}`)} style={{ backgroundColor: selectedTheme.backgroundColor }} variant='outlined'>View Details</Button>
                    </ButtonWrapper>
                    )}
      </ImageWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <Title>
            {title}
          </Title>
          {isShowDesc
            ? <ShowLessIcon onClick={() => setIsShowDesc(false)} />
            : <ShowMoreIcon onClick={() => setIsShowDesc(true)} />}
          <RatingsWrapper>
            {
                [...Array(highestRating)].map((_ele, _index) => <RatingsIcon style={{ color: _index < ratings ? '#ffb400' : 'black' }} key={_index} />)
            }
          </RatingsWrapper>
        </TitleWrapper>

        {isShowDesc
                    && (
                    <Description>
                      {description}
                    </Description>
                    )}
        <CtaSection>
          <FavoriteIcon
            style={{ color: favorite && '#e32b2b' }}
            fontSize='inherit'
            onClick={() => {
              const temp = [...moviesData];
              temp[index] = {
                ...temp[index],
                favorite: !favorite,
              };
              setMoviesData([...temp]);
            }}
          />
          <EditIcon style={{ color: '#b3c211' }} fontSize='inherit' onClick={() => navigate(`/edit-movie/${id}`)} />
          <DeleteIcon
            style={{ color: '#555' }}
            fontSize='inherit'
            onClick={() => {
              const temp = [...moviesData];
              temp.splice(index, 1);
              setMoviesData([...temp]);
            }}
          />
        </CtaSection>
      </ContentWrapper>
    </Wrapper>
  );
}

Movie.propTypes = {
  movie: Proptypes.shape({
    id: Proptypes.string,
    url: Proptypes.string,
    title: Proptypes.string,
    description: Proptypes.string,
    ratings: Proptypes.number,
    favorite: Proptypes.bool,
  }),
  index: Proptypes.number.isRequired,
};

Movie.defaultProps = {
  movie: {
    id: '',
    url: '',
    title: '',
    description: '',
    ratings: 0,
    favorite: false,
  },
};

export default Movie;
