import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.div`
  width: 180px;
  height: 250px;
  border: solid 1px #eee;
  position: relative;
  margin: 12px;

  &:hover {
    box-shadow: 0 2px 3px #ccc;
  }

  &:hover span, a, button {
    opacity: 1;
  }
`;

export const Picture = styled.img`
  width: 100%;
  height: 80%;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
`;

export const Rating = styled.p`
  display: inline-block;
  border-radius: 3px;
  background-color: green;
  color: white;
  font-size: 0.7em;
  padding: 2px 4px;
  margin-top: 4px;
`;

export const Price = styled.p`
  font-size: 0.95em;
  font-weight: 600;
  margin-bottom: 2px;
`;

export const More = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
`;

export const AddToCart = styled.span`
  width: 100%;
  position: absolute;
  top: 62%;
  display: flex;
  justify-content: center;
  opacity: 0;
`;

export const MoreInfo = styled(Link)`
  color: rgb(0, 132, 255);
  font-size: 0.85em;
  opacity: 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const Icon = styled.span`
  font-style: italic;
  color: rgb(0, 132, 255);
  font-size: 0.85em;
  font-weight: bold;
  padding-right: 5px;
  opacity: 0;
`;