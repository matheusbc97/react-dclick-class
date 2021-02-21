import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import useUser from './hooks/useUser';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

import { getUser } from './utils/userStorage';

import { Toast, ScreenLoading } from './components';

const Routes: React.FC = () => {
  const history = useHistory();
  const { setUser, user } = useUser();

  const firstRenderRef = useRef<boolean>(false);

  useEffect(() => {
    const userLocalStorage = getUser();

    if (userLocalStorage) {
      setUser(userLocalStorage);
    }
  }, [setUser, history]);

  useLayoutEffect(() => {
    if (firstRenderRef.current) {
      if (user) {
        history.push('home');
      } else {
        history.replace('/');
      }
    } else {
      firstRenderRef.current = true;
    }
  }, [history, user]);

  return (
    <>
      <Toast />
      <ScreenLoading />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
