import styled from '@emotion/styled';
import {Link} from 'react-router-dom';


export const MovieCard = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;

export const GoBackLink = styled(Link)`
  display: block;
  width: 100px;
  padding: 5px;
  margin-bottom: 5px;
  text-align: center;
  text-decoration: none;
  color: currentColor;
  border: 1px solid #c9c9c9;
  border-radius: 3px;
  :hover,
  :focus {
    background-color: #f7eded;
    border-color: #0f86c8;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;