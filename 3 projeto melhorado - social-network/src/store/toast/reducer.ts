import { SHOW_TOAST, HIDE_TOAST } from './actionTypes';

interface ReduxAction {
  type: string;
  payload: any;
}

interface ToastState {
  active: boolean;
  text: string;
}

const toastInitialState = {
  active: false,
  text: '',
};

export default function toastReducer(
  state: ToastState = toastInitialState,
  action: ReduxAction,
): ToastState {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        active: true,
        text: action.payload,
      };
    case HIDE_TOAST:
      return toastInitialState;
    default:
      return state;
  }
}
