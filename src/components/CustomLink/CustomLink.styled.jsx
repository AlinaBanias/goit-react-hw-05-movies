import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CustomLinkStyled = styled(Link)`
  color: ${props =>
    props.much || props.muchpath.pathnameBase === props.to ? 'blue' : 'black'};
  text-decoration: none;
  :hover {
    color: purple;
  }
`;