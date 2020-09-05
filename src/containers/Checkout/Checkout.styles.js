import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 65vw;
  position: relative;
`;

export const CheckoutForm = styled.form`
  width: 280px;
  margin: auto;
  border: solid 1px #eee;
  border-radius: 2px;
  z-index: 1000;
  position: fixed;
  top: 15%;
  left: 50%;
  margin-left: -140px;
  background-color: white;
`;

export const Logo = styled.div`
  width: 70px;
  height: 70px;
  border: solid 2px grey;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  z-index: 1200;
  left: 50%;
  top: -10%;
  margin-left: -35px;
  text-align: center;
  padding-top: 5px;
  font-size: 2.5em;
`;

export const InputField = styled.div`
  width: 100%;
  padding: 12px;
`;

export const Title = styled.div`
  text-align: center;
  text-transform: capitalize;
  padding: 16px;
  padding-top: 42px;
  border-bottom: solid 1px #ccc;
  position: relative;
`;

export const IconBg = styled.div`
  position: absolute;
  top: 8%;
  right: 3%;
`;

export const ValidCvc = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const PaynowButton = styled.div`
  text-align: center;
  padding: 16px;
  border-top: solid 1px #ccc;
`;

export const ErrorMsg = styled.p`
  font-size: 0.8em;
  font-weight: bold;
  color: red;
  text-align: center;
  padding-bottom: 6px;
`;