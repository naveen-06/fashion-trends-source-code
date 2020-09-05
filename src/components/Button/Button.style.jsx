import styled from 'styled-components';

export const Button = styled.button`
  border: solid 1px ${({ primary }) => primary ? "salmon" : "grey" };
  border-radius: 2px;
  outline: none;
  background-color: white;
  color: ${({ primary }) => primary ? "salmon" : "grey" };
  text-transform: uppercase;
  font-size: 0.8em;
  padding: 8px 20px;
  letter-spacing: 1px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    border: solid 1px ${({ primary }) => primary ? "salmon" : "black" };
    background-color: ${({ primary }) => primary ? "salmon" : "#eee" };
    color: ${({ primary }) => primary ? "white" : "black" };
  }

  @media (max-width: 630px) {
    font-size: 0.8em;
  }
`;