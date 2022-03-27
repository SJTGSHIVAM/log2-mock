import { UserLoginData } from 'interfaces';

import { UserLoginAction } from './action-types';

export const userLoginAction = (payload: UserLoginData) => ({
  type: UserLoginAction.LOGIN,
  payload,
});
export const userLogoutAction = (): { type: UserLoginAction.LOGOUT } => ({
  type: UserLoginAction.LOGOUT,
});
