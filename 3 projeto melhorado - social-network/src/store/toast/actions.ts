import { Dispatch } from 'redux';
import { SHOW_TOAST, HIDE_TOAST } from './actionTypes';

import { ToastOptions } from './reducer';

let toastId = 0;

const timeoutHideToast = (functionToTimeout: any, id: number) => {
  const idCopy = id;
  console.log('idc', idCopy);
  setTimeout(() => {
    functionToTimeout(idCopy);
  }, 3000);
};

export function showToastAction(
  toastOptions: ToastOptions,
): (dispatch: Dispatch<any>) => void {
  return (dispatch) => {
    dispatch({
      type: SHOW_TOAST,
      payload: {
        ...toastOptions,
        text: toastOptions.text + toastId,
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
