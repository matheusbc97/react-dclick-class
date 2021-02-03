/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import {
  Container,
  Content,
  LoginButton,
  RegisterButton,
  Title,
} from './styles';

import Input from './Input';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        login: '',
        password: '',
      },
    };
  }

  setCredentials(key, value) {
    const { credentials } = this.state;

    this.setState({
      credentials: {
        ...credentials,
        [key]: value,
      },
    });
  }

  login() {
    const { credentials } = this.state;
    console.log('credentials', credentials);
  }

  render() {
    const { credentials } = this.state;

    return (
      <Container>
        <Content>
          <Title>Faça o seu login!</Title>
          <Input
            icon="user"
            placeholder="Login"
            type="email"
            onChange={(e) => this.setCredentials('login', e.target.value)}
            value={credentials.login}
          />
          <Input
            icon="lock"
            placeholder="Senha"
            type="password"
            onChange={(e) => this.setCredentials('password', e.target.value)}
            value={credentials.password}
          />
          <LoginButton onClick={() => this.login()} type="submit">
            Login
          </LoginButton>
          <RegisterButton type="button">Cadastre-se</RegisterButton>
        </Content>
      </Container>
    );
  }
}
