import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

import { useAuth } from '../../context/AuthContext';
import { useMovies } from '../../context/MoviesContext';
import SnackbarComponent from '../../commons/Snackbar/Snackbar';
import BaseLayout from '../../BaseLayout/BaseLayout';
import {
  Wrapper, InputWrapper, ButtonWrapper,
} from './style';

/**
 * `EditMovie` allows the user to edit the data of the selected movie
 * @returns EditMovieJSX
 */
function EditMovie() {
  const { selectedTheme } = useAuth();
  const { moviesData, setMoviesData } = useMovies();
  const navigate = useNavigate();
  const { id } = useParams();

  const [successInfo, setSuccessInfo] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(moviesData.find((val) => val.id === id));
  }, [moviesData, id]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    navigate('/');
    setShowInfo(false);
  };

  return (
    data?.id && (
      <BaseLayout>
        <Wrapper>
          <InputWrapper>
            <TextField
              fullWidth
              id='filled-basic'
              label='Title'
              value={data.title}
              variant='filled'
              onChange={(event) => setData({
                ...data,
                title: event.target.value,
              })}
              style={{
                backgroundColor: selectedTheme.backgroundColor,
                borderRadius: '5px',
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <TextField
              fullWidth
              id='filled-basic'
              label='Description'
              value={data.description}
              variant='filled'
              onChange={(event) => setData({
                ...data,
                description: event.target.value,
              })}
              style={{
                backgroundColor: selectedTheme.backgroundColor,
                borderRadius: '5px',
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <TextField
              fullWidth
              id='filled-basic'
              label='url'
              value={data.url}
              variant='filled'
              onChange={(event) => setData({
                ...data,
                url: event.target.value,
              })}
              style={{
                backgroundColor: selectedTheme.backgroundColor,
                borderRadius: '5px',
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <TextField
              fullWidth
              id='filled-basic'
              label='Ratings'
              value={data.ratings}
              variant='filled'
              onChange={(event) => setData({
                ...data,
                ratings: event.target.value,
              })}
              style={{
                backgroundColor: selectedTheme.backgroundColor,
                borderRadius: '5px',
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <TextField
              fullWidth
              id='filled-basic'
              label='Trailer URL'
              value={data.trailerUrl}
              variant='filled'
              onChange={(event) => setData({
                ...data,
                trailerUrl: event.target.value,
              })}
              style={{
                backgroundColor: selectedTheme.backgroundColor,
                borderRadius: '5px',
              }}
            />
          </InputWrapper>
          <ButtonWrapper>
            <Button
              onClick={() => {
                setShowInfo(true);
                setSuccessInfo('The details has been successfully edited!');
                const index = moviesData.findIndex((val) => val.id === id);
                const temp = [...moviesData];
                temp[index] = { ...data };
                setMoviesData([...temp]);
              }}
              variant='contained'
            >
              UPDATE
            </Button>
            <SnackbarComponent
              handleClose={handleClose}
              showInfo={showInfo}
              successInfo={successInfo}
            />
          </ButtonWrapper>
        </Wrapper>
      </BaseLayout>
    )
  );
}

export default EditMovie;
