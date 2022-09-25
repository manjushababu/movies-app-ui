import React, { useEffect, useState } from 'react';

import { useMovies } from '../../context/MoviesContext';
import BaseLayout from '../../BaseLayout/BaseLayout';
import Movie from '../Movie/Movie';
import { Wrapper } from '../Dashboard/style';

function Favorites() {
  const { moviesData } = useMovies();
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    const filterData = moviesData.filter((res) => res.favorite);
    setFavMovies([...filterData]);
  }, [moviesData]);

  return (
    <BaseLayout>
      <Wrapper>
        {favMovies.map((res, index) => <Movie index={index} key={res.id} movie={res} />)}
      </Wrapper>
    </BaseLayout>
  );
}

export default Favorites;
