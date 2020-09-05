import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 60vw;
  margin: auto;
  margin-top: 80px;

  @media (max-width: 630px) {
    width: 90vw;
    margin-top: 50px;
  }
`;

export const Title = styled.h4`
  padding: 12px 0;
  border-bottom: solid 1px #ccc;
  text-transform: capitalize;
`;

export const ProductInfo = styled.div`
  width: 95%;
  margin: 20px auto;
  display: flex;

  @media (max-width: 630px) {
    font-size: 0.8em;
  }
`;

export const ImageContainer = styled.div`
  width: 250px;
  height: 300px;
  padding: 4px;
  border: solid 1px #eee;

  @media (max-width: 630px) {
    width: 140px;
    height: 200px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Details = styled.div`
  padding: 4px 0;
  margin-left: 26px;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

export const Name = styled.p`
  font-size: 1.2em;
  margin: 6px 0;
`;

export const AddBtnContainer = styled.div`
  margin: 6px 0;
`;

export const Lorem = styled.p`
  padding: 12px 6px;
`;

export const Price = styled.p`
  font-size: 1.1em;
  margin: 6px 0;
`;