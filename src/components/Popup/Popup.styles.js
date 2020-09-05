import styled from 'styled-components';

export const PopupContainer = styled.div`
  width: 300px;
  min-height: 100px;
  border: solid 1px #eee;
  border-radius: 2px;
  background-color: white;
  position: fixed;
  top: 42%;
  left: 50%;
  margin-left: -150px;
  margin-top: -50px;
  z-index: 1000;

  @media (max-width: 600px) {
    width: 250px;
    margin-left: -125px;
  }
`;

export const Title = styled.h4`
  padding: 12px;
  border-bottom: solid 1px #ccc;
`;

export const Subtitle = styled.p`
  padding: 12px;
  font-size: 0.85em;
  color: grey;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px;

  & button {
    margin-left: 8px;
  }
`;