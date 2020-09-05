import React from 'react';

import { CollectionContainer, Root, Section, Title, Subtitle, View } from './Collections.style';

import CartItem from '../CartItem/CartItem';
import Navbar from '../../containers/Navbar/Navbar';

const Collections = ({ history, match, collection, user }) => {
  return (
    <CollectionContainer>
      <Navbar />
      {collection.map(section => (
        <Root key={section.id}>
          <Title>
            <Subtitle>{section.title}</Subtitle>
            <View onClick={() => history.push(`${match.path}/${section.title.toLowerCase()}`)}>view all</View>
          </Title>
          <Section>
            {section.items.filter((item, idx) => idx < 4 && item).map(item => (
              <CartItem key={item.id} category={section.title} item={item} user={user}/>
            ))}
          </Section>
        </Root>
      ))}
    </CollectionContainer>
  );
};

export default Collections;