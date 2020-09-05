import styled from 'styled-components';

export const DropdownContainer = styled.div`
  width: 250px;
  height: 350px;
  position: fixed;
  top: 55px;
  right: 6.2%;
  z-index: 100;
  border: solid 1px #ccc;
  box-shadow: 0 2px 3px lightgrey;
  background-color: white;
  border-radius: 2px;
`;

export const Products = styled.div`
  width: 100%;
  height: 85%;
  overflow: auto;
`;

export const CartButton = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartItem = styled.div`
  width: 100%;
  display: flex;
  padding: 8px 12px;
  border-bottom: solid 1px #ccc;
`;

export const ImageContainer = styled.div`
  width: 30%;
  height: 80px;
  margin-right: 12px;
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 70%;
  align-self: center;
`;

export const Text = styled.p`
  font-size: 0.85em;
  color: grey;
  padding: 1px 0;
`;

export const CartEmptyMessage = styled.p`
  text-align: center;
  padding: 50px;
  font-weight: 600;
  font-size: 0.85em;
  color: grey;
`;