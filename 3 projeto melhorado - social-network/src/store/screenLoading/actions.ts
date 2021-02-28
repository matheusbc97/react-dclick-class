import { useCallback } from 'react';

import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { SHOW_SCREEN_LOADING, HIDE_SCREEN_LOADING } from './actionTypes';

interface ScreenLoadingOptions {
  active: boolean;
}

export const useScreenLoading = () => {
  const dispatch = useDispatch();

  const showScreenLoading = useCallback(
    (toastOptions?: ScreenLoadingOptions) => {
      dispatch({
        type: SHOW_SCREEN_LOADING,
        payload: toastOptions,
      });
    },
    [dispatch],
  );

  const hideScreenLoading = useCallback(
    (toastOptions?: ScreenLoadingOptions) => {
      dispatch({
        type: HIDE_SCREEN_LOADING,
        payload: toastOptions,
      });
    },
    [dispatch],
  );

  return {
    showScreenLoading,
    hideScreenLoading,
  };
};

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
