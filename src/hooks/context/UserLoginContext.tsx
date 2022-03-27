import {
  createContext,
  useContext,
} from 'react';

import { userLogger } from 'hooks';
import { UserLoginAction } from 'hooks/reducer/userLogin/action-types';
import { UserLoginData } from 'interfaces';

const UserContext = createContext<{
  loginUser: UserLoginData;
  dispatchLoginUser:
    | (() => null)
    | React.Dispatch<
        | { type: UserLoginAction.LOGOUT }
        | { type: UserLoginAction.LOGIN; payload: UserLoginData }
      >;
  isAuth: () => boolean;
}>({
  loginUser: {
    id: "",
    fname: "",
    username: "",
    encodedToken: "",
    cartLength: 0,
    wishlistLength: 0,
  },
  dispatchLoginUser: () => {},
  isAuth: () => false,
});
export const useLogin = () => useContext(UserContext);

export const UserProvider = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const { loginUser, dispatchLoginUser } = userLogger({
    id: "",
    fname: "",
    username: "",
    encodedToken: "",
    cartLength: 0,
    wishlistLength: 0,
  });
  const isAuth = () => {
    return !(loginUser.username === "" || loginUser.username === undefined);
  };
  return (
    <UserContext.Provider value={{ loginUser, dispatchLoginUser, isAuth }}>
      {children}
    </UserContext.Provider>
  );
};
