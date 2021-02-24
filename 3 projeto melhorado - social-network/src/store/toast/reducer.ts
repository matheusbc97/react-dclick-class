import { SHOW_TOAST, HIDE_TOAST } from './actionTypes';

interface ReduxAction {
  type: string;
  payload: ToastOptions;
}

export interface ToastOptions {
  type: ToastTypes;
  text: string;
}

export type ToastTypes = 'success' | 'warning' | 'danger' | null;

interface ToastState {
  active: boolean;
  text: string;
  type: ToastTypes;
}

const toastInitialState: ToastState = {
  active: false,
  text: '',
  type: null,
};

export default function toastReducer(
  state: ToastState = toastInitialState,
  action: ReduxAction,
): ToastState {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        active: true,
        text: action.payload.text,
        type: action.payload.type,
      };
    case HIDE_TOAST:
      return toastInitialState;
    default:
      return state;
  }
}
