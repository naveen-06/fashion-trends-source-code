import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Root, Title, Subtitle, Product, ImageContainer, Picture, Text, Remove, CartEmptyMessage, CheckoutBtnContainer, TotalPrice, RemoveIcon, ArrowIcon } from './WishList.styles';
import { selectCartItem, selectTotalPrice } from '../../redux/cartItem/cartItemSelector';
import { addCartItem, removeCartItem, removeProduct } from '../../redux/cartItem/cartItemAction';

import Navbar from '../Navbar/Navbar';
import Popup from '../../components/Popup/Popup';
import Backdrop from '../../components/Backdrop/Backdrop';
import Checkout from '../Checkout/Checkout';
import Button from '../../components/Button/Button';

class WishList extends Component {
  state = {
    popup: false,
    productId: null,
    checkout: false
  }

  toggleShow = ( id = null ) => {
    this.setState(state => ({
      popup: !state.popup,
      productId: id
    }));
  }

  toggleCheckout = () => {
    this.setState(state => ({
      checkout: !state.checkout
    }));
  }

  handleProductDelete = () => {
    const { user, deleteProduct } = this.props;
    deleteProduct(this.state.productId, user.userId);
    this.toggleShow();
  }

  render() {
    const { user, cartItem, totalPrice, addItem, removeItem } = this.props;
    const { popup, checkout } = this.state;

    const disableBtn = cartItem.length <= 0;

    return (
      <Root>
        {popup && <>
          <Popup title="Please Confirm" description="Are you sure to delete this product from your wishlist?" confirm={this.handleProductDelete} reject={this.toggleShow}/>
          <Backdrop hide={this.toggleShow} /> </> }
          {checkout && <>
            <Checkout confirm={this.toggleCheckout} price={totalPrice} userId={user.userId} close={this.toggleCheckout}/>
            <Backdrop hide={this.toggleCheckout}/>
          </>}
        <Navbar />
        <Title>wishlist</Title>
        <Subtitle>
          <span>product</span>
          <span>description</span>
          <Text>quantity</Text>
          <Text>price per item</Text>
          <Remove>remove</Remove>
        </Subtitle>
        {cartItem.length >= 1 ? cartItem.map(item => (
          <Product key={item.id}>
            <ImageContainer>
              <Picture src={item.imageUrl} alt={item.name}/>
            </ImageContainer>
            <p>{item.name}</p>
            <Text>
              <ArrowIcon onClick={() => removeItem(item, user.userId)}>&#8249;</ArrowIcon>
              <span>{item.quantity}</span>
              <ArrowIcon onClick={() => addItem(item, user.userId)}>&#8250;</ArrowIcon>
            </Text>
            <Text>&#8364; {item.price}</Text>
            <RemoveIcon onClick={() => this.toggleShow(item.id)}>&#10005;</RemoveIcon>
          </Product>
        )) : <CartEmptyMessage>your wishlist empty</CartEmptyMessage>}
        <TotalPrice>
          <h2>Total Price: &#8364; {totalPrice}</h2>
        </TotalPrice>
        <CheckoutBtnContainer>
          <Button primary click={this.toggleCheckout} disable={disableBtn}>checkout</Button>
        </CheckoutBtnContainer>
      </Root>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItem,
  totalPrice: selectTotalPrice
});

const mapDispatchToProps = dispatch => ({
  deleteProduct: (id, userId) => dispatch(removeProduct(id, userId)),
  addItem: (item, userId) => dispatch(addCartItem(item, userId)),
  removeItem: (item, userId) => dispatch(removeCartItem(item, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(WishList);