import { Dispatch } from 'redux';
import { SHOW_SCREEN_LOADING, HIDE_SCREEN_LOADING } from './actionTypes';

interface ScreenLoadingOptions {
  active: boolean;
}

export function showScreenLoadingAction(
  toastOptions?: ScreenLoadingOptions,
): (dispatch: Dispatch) => void {
  return (dispatch) => {
    dispatch({
      type: SHOW_SCREEN_LOADING,
      payload: toastOptions,
    });
  };
}

export function hideScreenLoadingAction(): (dispatch: Dispatch) => void {
  return (dispatch) => {
    dispatch({
      type: HIDE_SCREEN_LOADING,
    });
  };
}
