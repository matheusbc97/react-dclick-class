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
  render() {
    return (
      <Container>
        <Content>
          <Title>Faça o seu login!</Title>
          <Input icon="user" placeholder="Login" type="email" />
          <Input icon="lock" placeholder="Senha" type="password" />
          <LoginButton type="submit">Login</LoginButton>
          <RegisterButton type="button">Cadastre-se</RegisterButton>
        </Content>
      </Container>
    );
  }
}
