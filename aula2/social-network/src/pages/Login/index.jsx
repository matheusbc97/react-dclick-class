/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';
import api from '../../utils/api';
// import getYupValidationErrors from '../../utils/getYupValidationErrors';

import {
  Container,
  Content,
  LoginButton,
  RegisterButton,
  Title,
} from './styles';

import LoginInput from './LoginInput';

class Login extends Component {
  async login() {
    const { history } = this.props;

    try {
      const response = await api.get('users');

      console.log('response', response);
    } catch (error) {
      console.log('response', error);
    }

    /* {
      const response = await axios.get('users');

      console.log('response', response)
   /*
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
    } */

    history.push('home');
  }

  register() {
    const { history } = this.props;
    history.push('register');
  }

  render() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .email('O email precisa ser valido')
        .required('Campo Obrigatório'),
      password: yup
        .string()
        .required('Campo Obrigatório')
        .min(3, 'A senha deve conter ao menos 3 caracteres'),
    });

    return (
      <Container>
        <Content>
          <Title>Logue-se</Title>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={schema}
            onSubmit={(values) => {
              console.log('values', values);
              // this.login(values);
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              /* and other goodies */
            }) => (
              <form>
                {console.log('errors', errors)}
                <LoginInput
                  placeholder="email"
                  type="email"
                  icon="user"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email}
                  name="email"
                />
                <LoginInput
                  placeholder="password"
                  type="password"
                  icon="lock"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={errors.password}
                  name="password"
                />
                <LoginButton
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    this.login();
                  }}
                >
                  Login
                </LoginButton>
                <RegisterButton type="button" onClick={() => this.register()}>
                  Registre-se
                </RegisterButton>
              </form>
            )}
          </Formik>
        </Content>
      </Container>
    );
  }
}

export default withRouter(Login);
