import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { showToastAction } from '../../../store/toast/actions';
import {
  showScreenLoadingAction,
  hideScreenLoadingAction,
} from '../../../store/screenLoading/actions';
import useUser from '../../../hooks/useUser';

interface FormDetails {
  email: string;
  password: string;
}

const useLogin: () => (formDetails: FormDetails) => Promise<void> = () => {
  const dispatch = useDispatch();
  const { authenticate } = useUser();

  const login = useCallback(
    async (formDetails: FormDetails) => {
      dispatch(showScreenLoadingAction());
      try {
        const userExists = await authenticate(formDetails);

        dispatch(hideScreenLoadingAction());

        if (!userExists) {
          dispatch(
            showToastAction({
              text: 'O usuário não existe',
              type: 'danger',
            }),
          );
        }
      } catch (error) {
        dispatch(hideScreenLoadingAction());

        dispatch(
          showToastAction({
            text: 'Ocorreu Um erro inesperado',
            type: 'danger',
          }),
        );

        console.log('error', error);
      }
    },
    [dispatch, authenticate],
  );

  return login;
};

export default useLogin;
