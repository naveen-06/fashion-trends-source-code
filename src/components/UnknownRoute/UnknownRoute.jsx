import React from 'react';

import { UnknownRouteContainer, Text } from './UnknownRoute.styles';
import Button from '../Button/Button';

const UnknownRoute = ({ history }) => (
  <UnknownRouteContainer>
    <Text>Oops! page not found</Text>
    <Button primary click={() => history.replace('/')}>go to home</Button>
  </UnknownRouteContainer>
);

export default UnknownRoute;