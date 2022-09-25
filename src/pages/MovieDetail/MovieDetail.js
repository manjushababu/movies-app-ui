import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Button } from '@mui/material';

import { useMovies } from '../../context/MoviesContext';
import BaseLayout from '../../BaseLayout/BaseLayout';
import { Wrapper, Content, ButtonWrapper } from './style';

/**
 * `MovieDetail` allows the user to view the trailer, and other movie details
 * @returns MovieDetailJSX
 */
function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { moviesData } = useMovies();
  const [data, setData] = useState('');

  useEffect(() => {
    const requiredData = moviesData.find((_data) => _data.id === id);
    setData({ ...requiredData });
  }, []);

  return (
    <BaseLayout>
      <Wrapper>
        <ReactPlayer
          height='550px'
          width='100%'
          controls
          url={data.trailerUrl}
        />
        <Content>
          <h3>DESCRIPTION</h3>
          <p>{data.description}</p>
        </Content>
        <ButtonWrapper>
          <Button
            onClick={() => navigate(`/edit-movie/${data.id}`)}
            variant='contained'
          >
            Edit Movie
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </BaseLayout>
  );
}

export default MovieDetail;
