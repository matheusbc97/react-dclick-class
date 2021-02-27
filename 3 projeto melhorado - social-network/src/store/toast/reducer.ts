import { SHOW_TOAST, HIDE_TOAST } from './actionTypes';

interface ReduxAction {
  type: string;
  payload: ToastOptions;
}

export interface ToastOptions {
  type: ToastTypes;
  text: string;
  id?: number;
}

export type ToastTypes = 'success' | 'warning' | 'danger' | null;

interface ToastState {
  id: number;
  active: boolean;
  text: string;
  type: ToastTypes;
}

const toastInitialState: ToastState[] = [];

const removeItemFromArray = (state: any[], id: number) => {
  const stateCopy = [...state];

  const index = stateCopy.findIndex((item) => item.id === id);

  console.log('id', id);
  console.log('index', index);

  stateCopy.splice(index, 1);

  return stateCopy;
};

const pushItemToArray = (state: any[], item: any) => {
  const stateCopy = [...state];

  stateCopy.push(item);

  return stateCopy;
};

export default function toastReducer(
  state: ToastState[] = toastInitialState,
  action: any,
): ToastState[] {
  switch (action.type) {
    case SHOW_TOAST:
      return pushItemToArray(state, {
        active: true,
        text: action.payload.text,
        type: action.payload.type,
        id: action.payload.id,
      });
    case HIDE_TOAST:
      return removeItemFromArray(state, action.payload);
    default:
      return state;
  }
}
