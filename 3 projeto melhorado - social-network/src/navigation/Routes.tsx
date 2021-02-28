import { Switch, Route } from 'react-router-dom';

import useUser from 'shared/hooks/useUser';
import { Toast, ScreenLoading } from 'shared/components';

import Register from 'modules/account/pages/Register';
import Login from 'modules/account/pages/Login';
import Profile from 'modules/account/pages/Profile';
import Home from 'modules/posts/pages/PostsList';

import useRedirectUser from './hooks/useRedirectUser';
import Header from './components/Header';

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
        <>
          <Header />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </>
      </Switch>
    </>
  );
};

export default Routes;
