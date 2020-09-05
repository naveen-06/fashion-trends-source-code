import React from 'react';

import { IconBg } from './CloseIconBtn.style';

const CloseIconBtn = ({ click }) => (
  <IconBg onClick={click}>
    <h5>&#10005;</h5>
  </IconBg>
);

export default CloseIconBtn;