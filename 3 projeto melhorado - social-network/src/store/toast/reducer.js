import { SHOW_TOAST, HIDE_TOAST } from './actionTypes';

const toastInitialState = {
  active: false,
  text: '',
};

export default function toastReducer(state = toastInitialState, action) {
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
