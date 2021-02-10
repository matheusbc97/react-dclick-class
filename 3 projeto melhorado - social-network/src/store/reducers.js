import { combineReducers } from 'redux';

import user from './user/reducer';
import toast from './toast/reducer';
import screenLoading from './screenLoading/reducer';

export default combineReducers({
  user,
  toast,
  screenLoading,
});
