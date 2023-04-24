import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const location = useLocation;

const MovieItem = ({ id, title }) => {
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ state : location}}>
        {title}
      </Link>
    </li>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  state: PropTypes.object,
};