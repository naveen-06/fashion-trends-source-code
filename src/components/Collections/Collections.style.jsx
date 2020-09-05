import styled, { css } from 'styled-components';

const flexBox = css`
  display: flex;
  justify-content: space-between;
`;

export const CollectionContainer = styled.div`
  width: 65vw;
  margin: auto;
  margin-top: 80px;

  @media (max-width: 630px) {
    width: 90vw;
    margin-top: 50px;
  }
`;

export const Root = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  ${flexBox}
  flex-wrap: wrap;

  @media (max-width: 630px) {
    justify-content: center;
  }
`;

export const Title = styled.div`
  ${flexBox}
  align-items: center;
  border-bottom: solid 1px #eee;
  margin: 12px;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const Subtitle = styled.h3`
  padding: 12px 0;
`;

export const View = styled.span`
  color: rgb(0, 132, 255);
  font-weight: 600;
  cursor: pointer;
`;