import { combineReducers } from 'redux';

import toast from './toast/reducer';
import screenLoading from './screenLoading/reducer';

const combinedReducers = combineReducers({
  toast,
  screenLoading,
});

export default combinedReducers;
