import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { HeaderContainer, Logo, Content, Title, Link } from './Header.styles';

import { auth } from '../../firebase/firebase.utils';

import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import Backdrop from '../../components/Backdrop/Backdrop';
import Dropdown from '../../components/Dropdown/Dropdown';

class Header extends Component {
  state = {
    signup: false,
    signin: false,
    dropdown: false
  }

  toggleSignin = () => {
    this.setState(state => ({
      signin: !state.signin,
      signup: false
    }));
  }

  toggleDropdown = () => {
    this.setState(state => ({
      dropdown: !state.dropdown
    }));
  }

  toggleSignup = () => {
    this.setState(state => ({
      signup: !state.signup,
      signin: false
    }));
  }

  resetState = () => {
    this.setState({
      signup: false,
      signin: false,
      dropdown: false
    });
  }

  render() {
    const { signup, signin, dropdown } = this.state;
    const { history, user } = this.props;

    return (
      <div>
        <HeaderContainer>
          {signup && <>
            <Signup toggle={this.toggleSignin} reset={this.resetState} close={this.toggleSignup}/>
            <Backdrop hide={this.toggleSignup}/>
          </>}
          <Logo>
            <Title onClick={() => history.push("/")}>&#9813; fashion trends</Title>
          </Logo>
          <Content>
            {
              user && <Link onClick={this.toggleDropdown}>cart</Link>
            }
            <Link onClick={() => history.push("/shop/collections")}>shop</Link>
            {
              user 
              ? <Link signin onClick={() => auth.signOut()}>logout</Link>
              : <Link signin onClick={this.toggleSignin}>sign in</Link>
            }
          </Content>
        </HeaderContainer>
        {signin && <>
          <Signin toggle={this.toggleSignup} reset={this.resetState} close={this.toggleSignin}/>
          <Backdrop hide={this.toggleSignin}/>
        </>}
        {dropdown && <Dropdown toggleDropdown={this.toggleDropdown}/>}
      </div>
    );
  }
};

export default withRouter(Header);