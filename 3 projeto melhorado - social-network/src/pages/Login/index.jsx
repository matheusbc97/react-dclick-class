/* eslint-disable class-methods-use-this */
import React, { useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';

import { useDispatch } from 'react-redux';
import { showToastAction } from '../../store/toast/actions';
import {
  showScreenLoadingAction,
  hideScreenLoadingAction,
} from '../../store/screenLoading/actions';
import useUser from '../../hooks/useUser';

import {
  Container,
  Content,
  LoginButton,
  RegisterButton,
  Title,
} from './styles';

import LoginInput from './LoginInput';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const register = useCallback(() => {
    history.push('register');
  }, [history]);

  const { authenticate } = useUser();

  const login = useCallback(
    async (formDetails) => {
      dispatch(showScreenLoadingAction());
      try {
        console.log('testennn');
        const hasLogged = await authenticate(formDetails);

        dispatch(hideScreenLoadingAction());

        if (hasLogged) {
          history.push('home');
        }
      } catch (error) {
        dispatch(hideScreenLoadingAction());
        dispatch(showToastAction('Ocorreu Um erro inesperado'));

        console.log('error', error);
      }
    },
    [history, dispatch, authenticate],
  );

  const schema = useMemo(() => {
    return yup.object().shape({
      email: yup
        .string()
        .email('O email precisa ser valido')
        .required('Campo Obrigatório'),
      password: yup
        .string()
        .min(3, 'A senha deve conter ao menos 3 caracteres')
        .required('Campo Obrigatório'),
    });
  }, []);

  return (
    <Container>
      <Content>
        <Title>Logue-se</Title>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={login}
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
                <RegisterButton type="button" onClick={register}>
                  Registre-se
                </RegisterButton>
              </div>
            </form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default Login;
