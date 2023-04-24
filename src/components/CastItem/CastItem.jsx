import React from 'react';
import { Item, ImageWrapper } from './CastItem.styled';
import PropTypes from 'prop-types';

const CastItem = ({ profile_path, name, character }) => {
  return (
    <Item>
      <ImageWrapper>
          <img
            src={profile_path ? (`https://image.tmdb.org/t/p/w300${profile_path}`) : ("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg")}
            alt={name}
            width="150"
          />
      </ImageWrapper>

      <p> {name}</p>
      <p>Character: {character}</p>
    </Item>
  );
};

export default CastItem;

CastItem.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};