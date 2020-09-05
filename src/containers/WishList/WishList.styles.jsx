import styled from 'styled-components';

export const Root = styled.div`
  width: 50vw;
  margin: auto;
  margin-top: 80px;

  @media (max-width: 1000px) {
    width: 70vw;
  }

  @media (max-width: 600px) {
    width: 90vw;
    margin-top: 50px;
  }
`;

export const Title = styled.h3`
  padding: 16px 0;
  text-transform: capitalize;
`;

export const Subtitle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  justify-content: center;
  text-transform: capitalize;
  padding: 12px 0;
  border-bottom: solid 1px #ccc;

  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  border-bottom: solid 1px #ccc;

  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 100px;

  @media (max-width: 600px) {
    width: 40px;
    height: 50px;
  }
`;

export const TotalPrice = styled.div`
  padding: 12px 24px;
  text-align: center;
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  text-align: center;
  align-content: center;
`;

export const Remove = styled.p`
  text-align: right;
`;

export const RemoveIcon = styled.p`
  text-align: right;
  padding-right: 16px;
  font-weight: 900;
  cursor: pointer;
`;

export const ArrowIcon = styled.span`
  font-size: 1.6em;
  font-weight: 700;
  padding: 0 10px;
  align-self: center;
  cursor: pointer;
`;

export const CartEmptyMessage = styled.p`
  text-align: center;
  padding: 200px 0;
  color: grey;
  font-weight: 600;
  font-size: 0.85em;

  @media (max-width: 630px) {
    font-size: 0.6em;
  }
`;

export const CheckoutBtnContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;