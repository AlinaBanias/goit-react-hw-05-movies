import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CustomLinkStyled = styled(Link)`
  color: blue;
  text-decoration: none;
  :hover {
    color: purple;
  }
`;