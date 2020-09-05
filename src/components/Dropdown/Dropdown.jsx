import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { DropdownContainer, Products, CartButton, CartItem, ImageContainer, Picture, Content, Text, CartEmptyMessage } from './Dropdown.styles';
import { selectCartItem } from '../../redux/cartItem/cartItemSelector';

import Button from '../Button/Button';

const Dropdown = ({ cartItem, history, toggleDropdown }) => {
  const handleCartButton = () => {
    history.push('/wish-list');
    toggleDropdown();
  };

  return (
    <DropdownContainer>
      <Products>
      {cartItem.length >= 1 ? cartItem.map(item => (
        <CartItem key={item.id}>
          <ImageContainer>
            <Picture src={item.imageUrl} alt={item.name}/>
          </ImageContainer>
          <Content>
            <h4>{item.name}</h4>
            <Text>Price: <b>&#8364; {item.price}</b></Text>
            <Text>Quantity: <b>{item.quantity}</b></Text>
          </Content>
        </CartItem>
      )) : <CartEmptyMessage>cart empty</CartEmptyMessage>}
      </Products>
      <CartButton>
        <Button click={handleCartButton}>
          go to cart
        </Button>
      </CartButton>
    </DropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItem
});

export default withRouter(connect(mapStateToProps)(Dropdown));