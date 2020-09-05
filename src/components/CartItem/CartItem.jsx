import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { Item, Picture, Info, Rating, Price, More, AddToCart, MoreInfo, Icon } from './CartItem.style';

import Button from '../Button/Button';

import { addCartItem } from '../../redux/cartItem/cartItemAction';
import { randomRating } from '../../utility/utility';
import { selectCurrentUser } from '../../redux/currentUser/currentUserSelector';

const CartItem = ({ history, category, item, addItem, user }) => {
  const handleAddCartItem = evt => {
    evt.stopPropagation();
    addItem(item, user.userId);
  };

  const handleProductDetails = evt => {
    evt.stopPropagation();
    history.push(`/shop/collections/${category}/${item.name}`);
  };

  const handleLogin = evt => {
    evt.stopPropagation();
  };

  return (
    <Item onClick={handleProductDetails}>
      <Picture src={item.imageUrl} alt="item.name"/>
      <Info>
        <div>
          <h5>{item.name}</h5>
          <Rating>&#9733; {randomRating()}</Rating>
        </div>
        <More>
          <Price>&#8364; {item.price}</Price>
          <MoreInfo to={`/shop/collections/${category}/${item.name}`}>
            <Icon>&#120102; more info</Icon>
          </MoreInfo>
        </More>
      </Info>
      <AddToCart>
        {
          user 
          ? <Button primary click={handleAddCartItem}>add to cart</Button>
          : <Button click={handleLogin}>please login</Button>
        }
      </AddToCart>
    </Item>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  addItem: (cartItem, userId) => dispatch(addCartItem(cartItem, userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartItem));