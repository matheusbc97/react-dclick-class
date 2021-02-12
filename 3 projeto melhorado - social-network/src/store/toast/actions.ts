import { Dispatch } from 'redux';
import { SHOW_TOAST, HIDE_TOAST } from './actionTypes';

interface ToastOptions {
  active?: boolean;
  text: string;
}

export function showToastAction(
  toastOptions: ToastOptions,
): (dispatch: Dispatch) => void {
  return (dispatch) => {
    dispatch({
      type: SHOW_TOAST,
      payload: toastOptions,
    });
  };
}

export function hideToastAction(): (dispatch: Dispatch) => void {
  return (dispatch) => {
    dispatch({
      type: HIDE_TOAST,
    });
  };
}
