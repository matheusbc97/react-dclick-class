import { SHOW_SCREEN_LOADING, HIDE_SCREEN_LOADING } from './actionTypes';

export function showScreenLoadingAction(toastOptions) {
  return (dispatch) => {
    dispatch({
      type: SHOW_SCREEN_LOADING,
      payload: toastOptions,
    });
  };
}

export function hideScreenLoadingAction() {
  return (dispatch) => {
    dispatch({
      type: HIDE_SCREEN_LOADING,
    });
  };
}
