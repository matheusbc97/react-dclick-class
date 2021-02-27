import { Switch, Route } from 'react-router-dom';

import useUser from '../hooks/useUser';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home';

import { Toast, ScreenLoading } from '../components';

import useRedirectUser from './hooks/useRedirectUser';

const Routes: React.FC = () => {
  const { user } = useUser();

  useRedirectUser(user);

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
