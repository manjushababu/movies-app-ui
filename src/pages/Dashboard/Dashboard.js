import React from 'react';

import { useMovies } from '../../context/MoviesContext';
import BaseLayout from '../../BaseLayout/BaseLayout';
import Movie from '../Movie/Movie';
import { Wrapper } from './style';

function Dashboard() {
  const { moviesData } = useMovies();
  // eslint-disable-next-line no-console
  console.log('moviesData ', moviesData);
  return (
    <BaseLayout>
      <Wrapper>
        {moviesData.map((_data, index) => <Movie key={_data.id} movie={_data} index={index} />)}
      </Wrapper>
    </BaseLayout>
  );
}

export default Dashboard;
