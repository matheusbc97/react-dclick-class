import { Switch, Route } from 'react-router-dom';

import useUser from 'shared/hooks/useUser';
import { Toast, ScreenLoading } from 'shared/components';

import Register from 'modules/account/pages/Register';
import Login from 'modules/account/pages/Login';
import Home from 'modules/posts/pages/PostsList';

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
