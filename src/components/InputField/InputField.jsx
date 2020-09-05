import React from 'react';

import { InputContainer, Input, Label } from './InputField.styles';

const InputField = ({ label, short = false, value, change, ...otherProps }) => (
  <InputContainer>
    <Label value={value.length > 0}>{label}</Label>
    <Input onChange={change} length={short} {...otherProps} />
  </InputContainer>
);

export default InputField;