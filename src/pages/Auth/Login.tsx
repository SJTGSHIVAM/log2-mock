import './auth.css';

import React, { useState } from 'react';

import { userLogin } from 'apis';
import {
  BASE_IMG_URL,
  FORGOT_PASS_ROUTE,
  SVG_IMG,
  USER_SIGNUP_ROUTE,
} from 'consts';
import {
  useLogin,
  userLoginAction,
} from 'hooks';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState("sjtgshivam");
  const [password, setPassword] = useState("acheDin");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const { dispatchLoginUser } = useLogin();
  const navigate = useNavigate();

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Please enter all the fields");
      return;
    }
    try {
      const loginResp = await userLogin({ username, password });
      setError("");
      dispatchLoginUser(userLoginAction(loginResp.data));
      navigate("/products");
    } catch (e) {
      const error: any = e;
      setError(error.response.data.message);
    }
  };
  return (
    <>
      <div className="tui__card tui__pos--rel tui_card--shadow tui__pd-xs lg2__card--login">
        <div className="tui__card--img"></div>
        <div className="tui__card--header tui__pd-xs">
          <h4 className="tui__h-4">Login</h4>
        </div>
        <div className="tui__card--body  tui__pd-xs">
          <div className="tui__m-sm">
            <form onSubmit={submitLogin}>
              <span className="tui__input--box">
                <label htmlFor="display">Username:</label>
                <input
                  type="text"
                  placeholder="enter username"
                  className="tui__input--val"
                  id="display"
                  value={username}
                  onChange={(e) => setUsername(e.currentTarget.value)}
                />
              </span>
              <span className="tui__input--box">
                <div className="tui__flex--row-pack">
                  <label htmlFor="display">Password:</label>
                  <div className="tui__svg--icon-font tui__m-in-xs">
                    <img
                      className="tui__col--svg tui__svg--icon"
                      src={`${BASE_IMG_URL}/${SVG_IMG}/hidden-12114.svg`}
                      alt="show password"
                      onClick={() => setShowPass((p) => !p)}
                    />
                  </div>
                </div>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="enter password"
                  className="tui__input--val"
                  id="display"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </span>
              <button className="tui__btn--primary-br-none" type="submit">
                Login
              </button>
            </form>
          </div>
          {error !== "" && (
            <div className="tui__alert--error tui__m-auto">
              <p className="tui__text-xs tui__text-col--black">{error}</p>
            </div>
          )}
        </div>
        <div className="tui__card--footer  tui__flex--row-space-around tui__m-xl">
          <Link to={FORGOT_PASS_ROUTE}>
            <button className="tui__btn--link-br-none lg2__btn--forgot">
              Forgot Password ?
            </button>
          </Link>
          <Link to={USER_SIGNUP_ROUTE}>
            <button className="tui__btn--link-br-none lg2__btn--reg">
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
