import React from 'react';

import { Background } from './Backdrop.styles';

const Backdrop = ({ hide }) => {
  return (
    <Background onClick={hide}/>
  );
};

export default Backdrop;