import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';



const MovieItem = ({ id, title }) => {
    const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from : location}}>
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