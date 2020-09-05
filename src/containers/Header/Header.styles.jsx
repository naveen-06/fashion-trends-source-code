import styled, { css } from 'styled-components';

const flexBox = css`
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.header`
  ${flexBox};
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 3px #ccc;
  padding: 0 3%;
  z-index: 100;
  background-color: white;
`;

export const Logo = styled.div`
  ${flexBox};
  justify-content: space-between;

  @media (max-width: 600px) {
    font-size: 0.9em
  }
`;
  
export const Content = styled.div`
  ${flexBox};
  justify-content: right;
  text-transform: uppercase;
`;
  
export const Title = styled.h3`
  font-family: 'Kaushan Script', cursive;
  cursor: pointer;
`;

export const Link = styled.div`
  color: ${({ signin }) => signin ? 'white' : 'black'};
  background-color: ${({ signin }) => signin ? 'teal' : ''};
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 2px;
  margin-left: 12px;

  &:hover {
    background-color: ${({ signin }) => signin ? 'rgb(45, 160, 160)' : '#eee'};
  }

  @media (max-width: 600px) {
    font-size: 0.75em;
  }
`;