/* eslint-disable react/prefer-stateless-function */
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Input from '../../components/Input';
import useFormDetails from './useFormDetails';
import { saveUserToStorage } from '../../utils/userStorage';
import { Container, Content, RegisterButton, Title } from './styles';
import api from '../../utils/api';

const Register = () => {
  const [formDetails, setFormDetails] = useFormDetails({
    email: '',
    password: '',
    confirmPasword: '',
    name: '',
  });

  const history = useHistory('');

  const register = useCallback(async () => {
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
      api.interceptors.request.use(
        (config) => ({
          ...config,
          headers: {
            Authorization: 'Bearear saçlkdasmsdakjnkdj sandksjnas-assasa',
          },
        }),
        (error) => Promise.reject(error),
      );

      saveUserToStorage(user);

      history.push('home');
    } catch (error) {
      console.log(error);
    }
  }, [formDetails, history]);

  return (
    <Container>
      <Content>
        <Title>Cadastra-se</Title>
        <Input
          placeholder="Nome"
          type="name"
          onChange={(e) => setFormDetails('name', e.target.value)}
          value={formDetails.name}
        />
        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setFormDetails('email', e.target.value)}
          value={formDetails.email}
        />

        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setFormDetails('password', e.target.value)}
          value={formDetails.password}
        />
        <Input
          placeholder="Confirmar Senha"
          type="password"
          onChange={(e) => {
            setFormDetails('confirmPasword', e.target.value);
          }}
          value={formDetails.confirmPasword}
        />
        <RegisterButton type="submit" onClick={register}>
          Enviar
        </RegisterButton>
      </Content>
    </Container>
  );
};

export default Register;
