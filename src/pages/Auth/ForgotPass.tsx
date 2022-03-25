import './auth.css';

import {
  USER_LOGIN_ROUTE,
  USER_SIGNUP_ROUTE,
} from 'consts';
import { Link } from 'react-router-dom';

export const ForgotPass = () => {
  return (
    <>
      <div className="tui__card tui__pos--rel tui_card--shadow  tui__pd-xs lg2__card--forgot">
        <div className="tui__card--img"></div>
        <div className="tui__card--header tui__pd-xs">
          <h4 className="tui__h-4">Forgot Password</h4>
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

            <button className="tui__btn--primary-br-none" type="submit">
              Reset
            </button>
          </form>
        </div>
        <div className="tui__card--footer tui__m-xl tui__flex--row-space-around">
          <Link to={USER_LOGIN_ROUTE}>
            <button className="tui__btn--link-br-none lg2__btn--login">
              Login
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
