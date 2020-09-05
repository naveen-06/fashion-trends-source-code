import React from 'react';

import { PopupContainer, Title, Subtitle, Buttons } from './Popup.styles';
import Button from '../Button/Button';

const Popup = ({ title, description, confirm, reject }) => {
  return (
    <PopupContainer>
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>
      <Buttons>
        <Button primary click={confirm}>yes</Button>
        <Button click={reject}>no</Button>
      </Buttons>
    </PopupContainer>
  );
};

export default Popup;