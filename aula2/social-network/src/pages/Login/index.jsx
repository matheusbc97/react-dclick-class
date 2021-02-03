/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';

import {
  Container,
  Content,
  LoginButton,
  RegisterButton,
  Title,
} from './styles';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Title>Faça o seu login!</Title>
          <div>
            <FaUser />
            <input placeholder="Login" type="password" />
          </div>
          <div>
            <FaLock />
            <input placeholder="Senha" type="password" />
          </div>
          <LoginButton type="submit">Login</LoginButton>
          <RegisterButton type="button">Cadastre-se</RegisterButton>
        </Content>
      </Container>
    );
  }
}
