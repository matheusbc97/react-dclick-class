import { SET_USER } from './actionTypes';

const userInitialState = {
  name: 'teste',
};

export default function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}
