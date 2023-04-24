import PropTypes from 'prop-types';
import React from 'react';

import { useMatch } from 'react-router-dom';
import { CustomLinkStyled } from './CustomLink.styled';

const CustomLink = ({ to, children }) => {
  const much = useMatch(to);
  const muchPath = useMatch('/goit-react-hw-05-movies/movies/*') ?? '';

  return (
    <CustomLinkStyled to={to}>
      {children}
    </CustomLinkStyled>
  );
};

export default CustomLink;

CustomLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any,
};