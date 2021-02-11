/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import useUser from './hooks/useUser';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

import { getUser } from './utils/userStorage';

import { Toast, ScreenLoading } from './components';

const Routes = () => {
  const history = useHistory();
  const { setUser } = useUser();

  useEffect(() => {
    const user = getUser();

    if (user) {
      setUser(user);
      history.replace('home');
    } else {
      history.replace('/');
    }
  }, [history, setUser]);

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
