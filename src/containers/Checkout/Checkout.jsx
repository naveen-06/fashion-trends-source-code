import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CheckoutContainer, Logo, CheckoutForm, InputField, Title, ValidCvc, PaynowButton, IconBg, ErrorMsg } from './Checkout.styles';

import { clearCartItems } from '../../redux/cartItem/cartItemAction';
import Input from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import CloseIcon from '../../components/CloseIconBtn/CloseIconBtn';

class Checkout extends Component {
  state = {
    email: '',
    cardnumber: '',
    valid: '',
    cvc: '',
    errorMsg: ''
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handlePayment = () => {
    const { confirm, clearCart, userId } = this.props;
    const { email, cardnumber, valid, cvc } = this.state;

    this.setState({ errorMsg: '' });
    if (email.trim() === '') {
      this.setState({ errorMsg: 'please provide a valid email' });
      return;
    }

    if (cardnumber.length !== 16) {
      this.setState({ errorMsg: 'Enter 16 digit card number' });
      return;
    }

    if (valid.trim() === '') {
      this.setState({ errorMsg: 'Enter correct validity month' });
      return;
    } 

    if (cvc.length !== 3 ) {
      this.setState({ errorMsg: 'Enter 3 digit cvc number' });
      return;
    }

    confirm();
    clearCart(userId);
  }

  render() {
    const { email, cardnumber, valid, cvc, errorMsg } = this.state;
    const { price, close } = this.props;

    return (
      <CheckoutContainer>
        <CheckoutForm>
          <Logo>&#9813;</Logo>
          <Title>
            <h3>trends checkout</h3>
            <IconBg>
              <CloseIcon click={close}/>
            </IconBg>
          </Title>
          <InputField>
            <Input type="email" label="Email" name="email" change={this.handleChange} value={email} required/>
            <Input type="number" label="Card Number" name="cardnumber" change={this.handleChange} value={cardnumber} required/>
            <ValidCvc>
              <Input type="number" label="MM/YY" name="valid" short change={this.handleChange} value={valid} required/>
              <Input type="number" label="CVC" name="cvc" short change={this.handleChange} value={cvc} required/>
            </ValidCvc>
          </InputField>
          {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          <PaynowButton>
            <Button primary type="submit" click={this.handlePayment}>pay now <b style={{fontSize: "1.2em"}}>&#8364; {price}</b></Button>
          </PaynowButton>
        </CheckoutForm>
      </CheckoutContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clearCart: userId => dispatch(clearCartItems(userId))
});

export default connect(null, mapDispatchToProps)(Checkout);