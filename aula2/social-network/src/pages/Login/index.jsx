/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';

import { connect } from 'react-redux';
import api from '../../utils/api';
import { saveUserToStorage } from '../../utils/userStorage';
import { showToastAction } from '../../store/toast/actions';
import {
  showScreenLoadingAction,
  hideScreenLoadingAction,
} from '../../store/screenLoading/actions';

import {
  Container,
  Content,
  LoginButton,
  RegisterButton,
  Title,
} from './styles';

import LoginInput from './LoginInput';

class Login extends Component {
  componentDidMount() {
    console.log('props', this.props);
  }

  async login(formDetails) {
    const {
      showToast,
      history,
      showScreenLoading,
      hideScreenLoading,
    } = this.props;

    showScreenLoading();
    try {
      const response = await api.get('users');

      const user = response.data.find(
        (userData) =>
          userData.email === formDetails.email &&
          userData.password === formDetails.password,
      );

      /* api.interceptors.request.use(
        function (config) {
          return {
            ...config,
            headers: {
              Authorization: 'Bearear saçlkdasmsdakjnkdj sandksjnas-assasa',
            },
          };
        },
        function (error) {
          // Do something with request error
          return Promise.reject(error);
        },
      ); */

      saveUserToStorage(user);

      hideScreenLoading();

      if (user) {
        history.push('home');
      }
    } catch (error) {
      hideScreenLoading();
      showToast('Ocorreu Um erro inesperado');

      console.log('error', error);
    }
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
            onSubmit={(formDetails) => this.login(formDetails)}
            validationSchema={schema}
          >
            {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
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
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <LoginButton type="submit">Login</LoginButton>
                  <RegisterButton type="button" onClick={() => this.register()}>
                    Registre-se
                  </RegisterButton>
                </div>
              </form>
            )}
          </Formik>
        </Content>
      </Container>
    );
  }
}

export default withRouter(
  connect(() => {}, {
    showToast: showToastAction,
    showScreenLoading: showScreenLoadingAction,
    hideScreenLoading: hideScreenLoadingAction,
  })(Login),
);
