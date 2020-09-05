import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 0 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 6px;
  border: solid 1px grey;
  outline: none;
  margin: 12px auto;
  border-radius: 2px;
  font-size: 1.1em;

  &:focus {
    border: solid 1px salmon;
  }
`;

export const Label = styled.label`
  font-size: ${({ value }) => value ? '0.8em' : '1em'};
  position: absolute;
  top: ${({ value }) => value ? '2px' : '22px'};
  left: 20px;
  background-color: white;
  padding: 0 3px;
  color: ${({ value }) => value ? 'salmon' : '#ccc'};
  transition: all 0.4s ease-out;
`;