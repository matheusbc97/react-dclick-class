import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { SHOW_TOAST, HIDE_TOAST } from './actionTypes';

import { ToastOptions } from './reducer';

let toastId = 0;

const timeoutHideToast = (functionToTimeout: any, id: number) => {
  const idCopy = id;
  setTimeout(() => {
    functionToTimeout(idCopy);
  }, 3000);
};

export const useToast: () => {
  showToast: (toastOptions: ToastOptions) => void;
  hideToast: (id: number) => void;
} = () => {
  const dispatch = useDispatch();

  const hideToast = useCallback(
    (id: number) => {
      dispatch({
        type: HIDE_TOAST,
        payload: id,
      });
    },
    [dispatch],
  );

  const showToast = useCallback(
    (toastOptions: ToastOptions) => {
      dispatch({
        type: SHOW_TOAST,
        payload: {
          ...toastOptions,
          id: toastId,
        },
      });

      timeoutHideToast((copiedId: any) => {
        dispatch(hideToastAction(copiedId));
      }, toastId);

      // eslint-disable-next-line no-plusplus
      toastId++;
    },
    [dispatch],
  );

  return {
    showToast,
    hideToast,
  };
};

export function showToastAction(
  toastOptions: ToastOptions,
): (dispatch: Dispatch<any>) => void {
  return (dispatch) => {
    dispatch({
      type: SHOW_TOAST,
      payload: {
        ...toastOptions,
        id: toastId,
      },
    });

    timeoutHideToast((copiedId: any) => {
      dispatch(hideToastAction(copiedId));
    }, toastId);

    // eslint-disable-next-line no-plusplus
    toastId++;
  };
}

export function hideToastAction(id: number): (dispatch: Dispatch<any>) => void {
  return (dispatch) => {
    dispatch({
      type: HIDE_TOAST,
      payload: id,
    });
  };
}
