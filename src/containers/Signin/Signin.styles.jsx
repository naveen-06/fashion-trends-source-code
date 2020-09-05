import styled from 'styled-components';

export const Signin = styled.div`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  background-color: white;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const Title = styled.div`
  padding: 5%;
  border-bottom: solid 1px #eee;
  display: flex;
  justify-content: space-between;
`;

export const SignForm = styled.form`
  width: 90%;
  margin: 20px auto;
  padding: 6px;
  border-bottom: solid 1px #eee;
`;

export const SignBtn = styled.div`
  width: 100%;
  margin: 12px auto;
  text-align: center;
`;

export const ToSignup = styled.div`
  width: 80%;
  margin: 12px auto;
  padding: 6px;
  text-align: center;
`;

export const CreateAccount = styled.span`
  text-transform: capitalize;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: salmon;
  }
`;

export const AlertMsg = styled.span`
  font-size: 0.7em;
  font-weight: bold;
  color: red;
  padding: 0 12px;
`;