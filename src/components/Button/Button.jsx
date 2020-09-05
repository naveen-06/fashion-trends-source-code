import React from 'react';

import { Button } from './Button.style';

const CustomButton = ({ children, click, primary, disable, type }) => {
  return (
    <Button onClick={click} primary={primary} disabled={disable} type={type}>{children}</Button>
  );
};

export default CustomButton;