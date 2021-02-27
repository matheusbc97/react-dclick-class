import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../../models';

const useRedirectUser = (user: User | null) => {
  const history = useHistory();

  useLayoutEffect(() => {
    if (user) {
      history.push('home');
    } else {
      history.replace('/');
    }
  }, [history, user]);
};

export default useRedirectUser;
