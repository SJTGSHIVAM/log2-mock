import { useReducer } from 'react';

import { UserLoginData } from 'interfaces';

import { UserLoginAction } from './action-types';

function loginReducer(
  state: UserLoginData,
  action:
    | { type: UserLoginAction.LOGOUT }
    | { type: UserLoginAction.LOGIN; payload: UserLoginData }
) {
  switch (action.type) {
    case UserLoginAction.LOGIN:
      const { id, fname, username, encodedToken, cartLength, wishlistLength } =
        action.payload;
      localStorage.setItem("id", id);
      localStorage.setItem("fname", fname);
      localStorage.setItem("username", username);
      localStorage.setItem("encodedToken", encodedToken);
      localStorage.setItem("cartLength", String(cartLength));
      localStorage.setItem("wishlistLength", String(wishlistLength));
      return {
        ...action.payload,
      };

    case UserLoginAction.LOGOUT:
      localStorage.removeItem("id");
      localStorage.removeItem("fname");
      localStorage.removeItem("username");
      localStorage.removeItem("encodedToken");
      localStorage.removeItem("cartLength");
      localStorage.removeItem("wishlistLength");
      return {
        id: "",
        fname: "",
        username: "",
        encodedToken: "",
        cartLength: 0,
        wishlistLength: 0,
      };
    default:
      return state;
  }
}

export const userLogger = (initialValue: UserLoginData) => {
  const [loginUser, dispatchLoginUser] = useReducer(
    loginReducer,
    initialValue,
    ({ id, fname, username, encodedToken, cartLength, wishlistLength }) => {
      id = localStorage.getItem("id") ? String(localStorage.getItem("id")) : "";
      fname = localStorage.getItem("fname")
        ? String(localStorage.getItem("fname"))
        : "";
      username = localStorage.getItem("username")
        ? String(localStorage.getItem("username"))
        : "";
      encodedToken = localStorage.getItem("encodedToken")
        ? String(localStorage.getItem("encodedToken"))
        : "";
      cartLength = localStorage.getItem("cartLength")
        ? Number(localStorage.getItem("cartLength"))
        : 0;
      wishlistLength = localStorage.getItem("wishlistLength")
        ? Number(localStorage.getItem("wishlistLength"))
        : 0;

      return {
        id,
        fname,
        username,
        encodedToken,
        cartLength: Number(cartLength),
        wishlistLength: Number(wishlistLength),
      };
    }
  );
  return { loginUser, dispatchLoginUser };
};
