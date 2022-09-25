import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

import { useAuth } from '../../context/AuthContext';
import { useMovies } from '../../context/MoviesContext';
import BaseLayout from '../../BaseLayout/BaseLayout';
import SnackbarComponent from '../../commons/Snackbar/Snackbar';
import { Wrapper, InputWrapper, ButtonWrapper } from './style';

function AddMovies() {
  const navigate = useNavigate();
  const { selectedTheme } = useAuth();
  const { moviesData, setMoviesData } = useMovies();

  const [successInfo, setSuccessInfo] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [movie, setMovie] = useState({
    id: moviesData.length,
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowInfo(false);
    navigate('/');
  };

  return (
    <BaseLayout>
      <Wrapper>
        <InputWrapper>
          <TextField
            color='success'
            fullWidth
            id='filled-basic'
            label='Title'
            variant='filled'
            onChange={(e) => setMovie({ ...movie, title: e.target.value })}
            style={{
              backgroundColor: selectedTheme.backgroundColor,
              borderRadius: '5px',
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            color='success'
            fullWidth
            id='filled-basic'
            label='Description'
            variant='filled'
            onChange={(e) => setMovie({ ...movie, description: e.target.value })}
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
            label='URL'
            variant='filled'
            onChange={(event) => setMovie({
              ...movie,
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
            variant='filled'
            onChange={(e) => setMovie({ ...movie, ratings: e.target.value })}
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
            variant='filled'
            onChange={(e) => setMovie({ ...movie, trailerUrl: e.target.value })}
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
              setMoviesData([...moviesData, movie]);
            }}
            variant='contained'
          >
            ADD MOVIE
          </Button>
        </ButtonWrapper>
        <SnackbarComponent
          handleClose={handleClose}
          showInfo={showInfo}
          successInfo={successInfo}
        />
      </Wrapper>
    </BaseLayout>
  );
}

export default AddMovies;
