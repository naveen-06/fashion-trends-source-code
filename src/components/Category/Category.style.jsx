import styled from 'styled-components';

export const Root = styled.div`
  width: 65vw;
  margin: auto;
  margin-top: 80px;

  @media (max-width: 630px) {
    width: 90vw;
    margin-top: 50px;
  }
`;

export const Items = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;  

export const Title = styled.h3`
  text-transform: capitalize;
  border-bottom: solid 1px #eee;
  padding: 12px 0;
  margin: 12px;
`;