/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import {
  Container,
  Content,
  LoginButton,
  RegisterButton,
  Title,
} from './styles';

import LoginInput from './LoginInput';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      formDetails: {
        email: '',
        password: '',
      },
      formErrors: {
        email: false,
        password: false,
      },
    };
  }

  setFormDetails(key, value) {
    const { formDetails } = this.state;
    this.setState({
      formDetails: {
        ...formDetails,
        [key]: value,
      },
    });
  }

  async login() {
    const { formDetails } = this.state;
    const { history } = this.props;

    const errors = {
      email: false,
      password: false,
    };

    if (formDetails.email.length === 0) {
      errors.email = true;
    }

    if (formDetails.password.length === 0) {
      errors.password = true;
    }

    const hasErrors = Object.keys(errors).find((key) => errors[key] === true);

    this.setState({
      formErrors: errors,
    });

    if (hasErrors) {
      return;
    }

    try {
      const response = await axios.get('http://localhost:3004/users');

      const user = response.data.find(
        (userData) =>
          userData.email === formDetails.email &&
          userData.password === formDetails.password,
      );

      if (user) {
        history.push('home');
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  register() {
    const { history } = this.props;
    history.push('register');
  }

  render() {
    const { formDetails, formErrors } = this.state;
    return (
      <Container>
        <Content>
          <Title>Logue-se</Title>
          <LoginInput
            placeholder="email"
            type="email"
            onChange={(e) => this.setFormDetails('email', e.target.value)}
            value={formDetails.email}
            icon="user"
            hasError={formErrors.email}
          />
          <LoginInput
            placeholder="password"
            type="password"
            onChange={(e) => this.setFormDetails('password', e.target.value)}
            value={formDetails.password}
            icon="lock"
            hasError={formErrors.password}
          />
          <LoginButton type="submit" onClick={() => this.login()}>
            Login
          </LoginButton>
          <RegisterButton type="button" onClick={() => this.register()}>
            Registre-se
          </RegisterButton>
        </Content>
      </Container>
    );
  }
}

export default withRouter(Login);
