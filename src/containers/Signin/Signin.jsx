import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Signin, Title, SignForm, SignBtn, ToSignup, CreateAccount, AlertMsg } from './Signin.styles';

import Input from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import CloseIcon from '../../components/CloseIconBtn/CloseIconBtn';

import { auth, signinWithGoogle } from '../../firebase/firebase.utils';

class Login extends Component {
  state = {
    email: '',
    password: '',
    validEmail: false,
    validPassword: false,
    error: null,
    loading: false
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async evt => {
    evt.preventDefault();
    const { email, password } = this.state;

    if (email.trim() === '') {
      this.setState({ validEmail: true });
      return;
    }
    this.setState({ validEmail: false });

    if (password.length <= 5 || password.trim() === '') {
      this.setState({ validPassword: true });
      return;
    }
    this.setState({ validPassword: false });

    this.setState({ loading: true });
    try {
      await auth.signInWithEmailAndPassword( email, password );
      this.setState({
        email: "",
        password: ""
      });
      this.setState({ loading: false });
      this.props.reset();
    } catch (error) {
      this.setState({ error: error.code, loading: false });
    }
  }

  handleGoogleSingin = () => {
    signinWithGoogle();
    this.props.reset();
  }

  render() {
    const { toggle, close } = this.props;
    const { email, password, validEmail, validPassword, loading } = this.state;

    return (
      <Signin>
        <Title>
          <h4>Welcome to Trends</h4>
          <CloseIcon click={close}/>
        </Title>
        <SignForm onSubmit={this.handleSubmit}>
          <Input type="email" name="email" label="Email" value={email} change={this.handleChange}/>
          {validEmail && <AlertMsg>*please enter a valid email</AlertMsg>}
          <Input type="password" name="password" label="Password" value={password} change={this.handleChange}/>
          {validPassword && <AlertMsg>*please enter your correct password!</AlertMsg>}
          <SignBtn>
            {
              loading
              ? <Button>logging in...</Button>
              : <Button primary click={this.handleSubmit}>Login</Button>
            }
          </SignBtn>
        </SignForm>
        <SignBtn>
          <Button click={this.handleGoogleSingin}>continue with google</Button>
        </SignBtn>
        <ToSignup>
          <p>Don't have an account? <CreateAccount onClick={toggle}>Create account</CreateAccount></p>
        </ToSignup>
      </Signin>
    );
  }
};

export default withRouter(Login);