import React from 'react';

import { Root, Items, Title } from './Category.style';

import CartItem from '../CartItem/CartItem';
import Navbar from '../../containers/Navbar/Navbar';

const Category = ({ collection, match, user }) => {
  const category = collection.find(items => items.routeName === match.params.categoryId);


  return (
    <Root>
      <Navbar />
      <Title>{category.title}</Title>
      <Items>
        {category.items.map(item => (
          <CartItem key={item.id} item={item} category={category.title} user={user}/>
        ))}
      </Items>
    </Root>
  );
};

export default Category;