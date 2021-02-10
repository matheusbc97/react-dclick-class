/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

import { getUser } from './utils/userStorage';

import { Toast, ScreenLoading } from './components';

class Routes extends Component {
  componentDidMount() {
    const { history } = this.props;
    const user = getUser();

    if (user) {
      history.replace('home');
    } else {
      history.replace('/');
    }
  }

  render() {
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
  }
}

export default withRouter(Routes);
