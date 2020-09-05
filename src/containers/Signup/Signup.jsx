import React, { Component } from 'react';

import { SignupContainer, SignupForm, Title, SignupBtn, ToLogin, Login } from './Signup.styles';

import { auth } from '../../firebase/firebase.utils';

import Input from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import CloseIcon from '../../components/CloseIconBtn/CloseIconBtn';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: null,
    loading: false
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async evt => {
    evt.preventDefault();
    const { email, password, confirmPassword } = this.state;
    
    if (password.trim() !== confirmPassword.trim()) {
      alert("password not match!");
      return;
    }

    if (email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
      alert("please enter a valid email, password");
      return;
    }

    this.setState({ loading: true });
    try {
      await auth.createUserWithEmailAndPassword( email, password );
      this.setState( {
        email: "",
        password: "",
        confirmPassword: "",
        error: null,
        loading: false
      } );
      this.props.reset();
    } catch (error) {
      this.setState({ error: error.code, loading: false });
    }
  }

  render() {
    const { email, password, confirmPassword, loading } = this.state;
    const { toggle, close } = this.props;

    return (
      <SignupContainer>
        <Title>
          <h4>Create Account</h4>
          <CloseIcon click={close}/>
        </Title>
        <SignupForm onSubmit={this.handleSubmit}>
          <Input type="email" name="email" label="Email" value={email} change={this.handleChange} required/>
          <Input type="password" name="password" label="Create Password" value={password} change={this.handleChange} required/>
          <Input type="password" name="confirmPassword" label="Confirm Password" value={confirmPassword} change={this.handleChange} required/>
          <SignupBtn>
            {
              loading
              ? <Button>creating account...</Button>
              : <Button primary click={this.handleSubmit}>create account</Button>
            }
          </SignupBtn>
        </SignupForm>
        <ToLogin>
          <p>Already have an account? <Login onClick={toggle}>Login</Login></p>
        </ToLogin>
      </SignupContainer>
    );
  }
}

export default Signup;