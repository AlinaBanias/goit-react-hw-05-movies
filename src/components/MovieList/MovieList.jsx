import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';

import MovieItem from 'components/MovieItem';



const MovieList = ({ movies }) => {
    const location =  useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <MovieItem key={id} id={id} title={title} state={{ from: location }} />
      ))}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array,
  state: PropTypes.any,
};