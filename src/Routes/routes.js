import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Signup from '../Authentication/Signup/Signup';
import Login from '../Authentication/Login/Login';
import Favorites from '../pages/Favorites/Favorites';
import AddMovies from '../pages/AddMovies/AddMovies';
import Dashboard from '../pages/Dashboard/Dashboard';
import EditMovie from '../pages/EditMovie/EditMovie';
import MovieDetail from '../pages/MovieDetail/MovieDetail';

/**
 * `RoutesComponent` all the routes and the respective components
 * can be declared from a specific component
 * @returns RoutesComponentJSX
 */
function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Dashboard />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/add-movies' exact element={<AddMovies />} />
        <Route path='/edit-movie/:id' exact element={<EditMovie />} />
        <Route path='/favorites' exact element={<Favorites />} />
        <Route path='/movie-detail/:id' exact element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default RoutesComponent;
