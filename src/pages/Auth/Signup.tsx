import './auth.css';

import { USER_LOGIN_ROUTE } from 'consts';
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <>
      <div className="tui__card tui__pos--rel tui_card--shadow tui__pd-xs lg2__card--reg">
        <div className="tui__card--img"></div>
        <div className="tui__card--header tui__pd-xs">
          <h4 className="tui__h-4">Sign up</h4>
        </div>
        <div className="tui__card--body tui__pd-xs tui__flex--col">
          <form>
            <span className="tui__input--box">
              <label htmlFor="display">First Name:</label>
              <input
                type="text"
                placeholder="enter First name"
                className="tui__input--val"
                id="display"
              />
            </span>
            <span className="tui__input--box">
              <label htmlFor="display">Last Name:</label>
              <input
                type="text"
                placeholder="enter Last name"
                className="tui__input--val"
                id="display"
              />
            </span>
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
              <label htmlFor="display">email:</label>
              <input
                type="email"
                placeholder="enter email"
                className="tui__input--val"
                id="display"
              />
              <span className="tui__input--box">
                <label htmlFor="display">DOB:</label>
                <input type="date" className="tui__input--val" id="display" />
              </span>
              <span className="tui__input--box">
                <label htmlFor="display">Contant no:</label>
                <input type="text" className="tui__input--val" id="display" />
              </span>
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
                className="tui__input--val "
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
            <button
              className="tui__btn--primary-br-none tui__width--max-content tui__m-t-md tui__m-l-xs"
              type="submit"
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="tui__card--footer tui__flex--center tui__m-xl">
          <Link to={USER_LOGIN_ROUTE}>
            {" "}
            <button className="tui__btn--link-br-none lg2__btn--login">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
