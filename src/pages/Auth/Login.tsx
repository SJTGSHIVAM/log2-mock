import './auth.css';

import {
  FORGOT_PASS_ROUTE,
  USER_SIGNUP_ROUTE,
} from 'consts';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <>
      <div className="tui__card tui__pos--rel tui_card--shadow tui__pd-xs lg2__card--login">
        <div className="tui__card--img"></div>
        <div className="tui__card--header tui__pd-xs">
          <h4 className="tui__h-4">Login</h4>
        </div>
        <div className="tui__card--body tui__pd-xs">
          <form>
            <span className="tui__input--box">
              <label htmlFor="display">Username:</label>
              <input
                type="text"
                placeholder="enter username"
                className="tui__input--val"
                id="display"
              />
            </span>
            <span className="tui__input--box">
              <div className="tui__flex--row-pack">
                <label htmlFor="display">Password:</label>
                <div className="tui__svg--icon-font tui__m-in-xs">
                  <img
                    className="tui__col--svg tui__svg--icon"
                    src="/assets/svgs/hidden-12114.svg"
                    alt="show password"
                  />
                </div>
              </div>
              <input
                type="password"
                placeholder="enter password"
                className="tui__input--val"
                id="display"
              />
            </span>
            <button className="tui__btn--primary-br-none" type="submit">
              Login
            </button>
          </form>
        </div>
        <div className="tui__card--footer tui__flex--row-space-around tui__m-xl">
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
