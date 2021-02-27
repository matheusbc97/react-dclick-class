import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';

import {
  Container,
  Content,
  LoginButton,
  RegisterButton,
  Title,
} from './styles';

import LoginInput from './LoginInput';
import useLogin from './hooks/useLogin';
import useFormDetailsSchema from './hooks/useFormDetailsSchema';

const Login: React.FC = () => {
  const history = useHistory();

  const register = useCallback(() => {
    history.push('register');
  }, [history]);

  const login = useLogin();

  const schema = useFormDetailsSchema();

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
