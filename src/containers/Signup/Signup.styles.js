import styled from 'styled-components';

export const SignupContainer = styled.div`
  width: 300px;
  margin: 5% auto;
  border: solid 1px #eee;
  background-color: white;
  border-radius: 2px;
  position: fixed;
  top: 10%;
  left: 50%;
  margin-left: -140px;
  z-index: 1000;

  @media (max-width: 600px) {
    width: 250px;
    margin-left: -125px;
  }
`;

export const SignupForm = styled.form`
  width: 90%;
  margin: auto;
  padding-top: 16px;
`;

export const Title = styled.div`
  padding: 16px;
  text-align: center;
  border-bottom: solid 1px #ccc;
  display: flex;
  justify-content: space-between;
`;

export const SignupBtn = styled.div`
  padding: 16px;
  text-align: center;
`;

export const ToLogin = styled.div`
  padding: 16px;
  text-align: center;
  border-top: solid 1px #ccc;
`;

export const Login = styled.span`
  font-weight: 600;

  &:hover {
    color: salmon;
    cursor: pointer;
  }  
`;