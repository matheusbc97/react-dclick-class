import { SHOW_SCREEN_LOADING, HIDE_SCREEN_LOADING } from './actionTypes';

const screenLoadingInitialState = {
  active: false,
};

export default function screenLoadingReducer(
  state = screenLoadingInitialState,
  action,
) {
  switch (action.type) {
    case SHOW_SCREEN_LOADING:
      return {
        active: true,
      };
    case HIDE_SCREEN_LOADING:
      return screenLoadingInitialState;
    default:
      return state;
  }
}
