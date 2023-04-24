import PropTypes from 'prop-types';
import React from 'react';
import { CustomLinkStyled } from './CustomLink.styled';

const CustomLink = ({ to, children }) => {
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