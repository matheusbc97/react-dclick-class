import * as actionTypes from './actionTypes';

interface ScreeLoadingState {
  active: boolean;
}

const screenLoadingInitialState: ScreeLoadingState = {
  active: false,
};

interface ReduxAction {
  type: string;
  payload: any;
}

export default function screenLoadingReducer(
  state: ScreeLoadingState = screenLoadingInitialState,
  action: ReduxAction,
): ScreeLoadingState {
  switch (action.type) {
    case actionTypes.SHOW_SCREEN_LOADING:
      return {
        active: true,
      };
    case actionTypes.HIDE_SCREEN_LOADING:
      return screenLoadingInitialState;
    default:
      return state;
  }
}
