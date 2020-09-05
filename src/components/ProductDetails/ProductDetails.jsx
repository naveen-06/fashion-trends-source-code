import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { SHOP_DATA } from '../../redux/collections';
import { ProductContainer, Title, ProductInfo, ImageContainer, Image, Details, AddBtnContainer, Name, Price, Lorem } from './ProductDetails.styles';

import Navbar from '../../containers/Navbar/Navbar';
import Button from '../Button/Button';

import { addCartItem } from '../../redux/cartItem/cartItemAction';
import { randomRating } from '../../utility/utility';
import { selectCurrentUser } from '../../redux/currentUser/currentUserSelector';

const ProductDetails = ({ match, user, addItem }) => {
  const { categoryId, productId } = match.params;
  const product = SHOP_DATA.find(category => category.title === categoryId).items.find(item => item.name === productId);
  
  const handleLogin = evt => {
    evt.stopPropagation();
  };

  return (
    <ProductContainer>
      <Navbar />
      <Title>product details</Title>
      <ProductInfo>
        <ImageContainer>
          <Image src={product.imageUrl} alt={product.name}/>
        </ImageContainer>
        <Details>
          <Name>{categoryId} / <b>{productId}</b></Name>
          <Price>Price: &#8364;{product.price}</Price>
          <Price>Rating: {randomRating()}</Price>
          <AddBtnContainer>
            {
              user 
              ? <Button primary click={() => addItem(product, user.userId)}>add to cart</Button>
              : <Button click={handleLogin}>please login</Button>
            }
          </AddBtnContainer>
        </Details>
      </ProductInfo>
      <div>
        <Title>specifications</Title>
        <Lorem>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Lorem>
      </div>
      <div>
        <Title>other details</Title>
        <Lorem>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Lorem>
      </div>
    </ProductContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  addItem: (cartItem, userId) => dispatch(addCartItem(cartItem, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);