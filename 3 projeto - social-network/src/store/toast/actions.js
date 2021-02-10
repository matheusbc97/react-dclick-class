import { SHOW_TOAST, HIDE_TOAST } from './actionTypes';

export function showToastAction(toastOptions) {
  return (dispatch) => {
    dispatch({
      type: SHOW_TOAST,
      payload: toastOptions,
    });
  };
}

export function hideToastAction() {
  return (dispatch) => {
    dispatch({
      type: HIDE_TOAST,
    });
  };
}
