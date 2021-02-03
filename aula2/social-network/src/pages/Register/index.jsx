/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Input from '../../components/Input';

import { Container, Content, RegisterButton, Title } from './styles';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      formDetails: {
        email: '',
        password: '',
        confirmPasword: '',
        name: '',
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

  async register() {
    const { formDetails } = this.state;
    // const { history } = this.props;

    if (formDetails.email.length === 0) {
      return;
    }

    if (formDetails.password.length === 0) {
      return;
    }

    if (formDetails.name.length === 0) {
      return;
    }

    if (formDetails.confirmPasword.length === 0) {
      return;
    }

    if (formDetails.confirmPasword !== formDetails.password) {
      return;
    }

    const user = {
      name: formDetails.name,
      email: formDetails.email,
      password: formDetails.password,
    };

    try {
      await axios.post('http://localhost:3004/users', user);
      console.log('funcionou');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { formDetails } = this.state;
    return (
      <Container>
        <Content>
          <Title>Cadastra-se</Title>
          <Input
            placeholder="Nome"
            type="name"
            onChange={(e) => this.setFormDetails('name', e.target.value)}
            value={formDetails.name}
          />
          <Input
            placeholder="Email"
            type="email"
            onChange={(e) => this.setFormDetails('email', e.target.value)}
            value={formDetails.email}
          />

          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => this.setFormDetails('password', e.target.value)}
            value={formDetails.password}
          />
          <Input
            placeholder="Confirmar Senha"
            type="password"
            onChange={(e) => {
              this.setFormDetails('confirmPasword', e.target.value);
            }}
            value={formDetails.confirmPasword}
          />
          <RegisterButton type="submit" onClick={() => this.register()}>
            Enviar
          </RegisterButton>
        </Content>
      </Container>
    );
  }
}

export default withRouter(Register);
