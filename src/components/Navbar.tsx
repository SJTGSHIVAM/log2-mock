import {
  useEffect,
  useState,
} from 'react';

import {
  BASE_IMG_URL,
  SVG_IMG,
} from 'consts';
import {
  useLogin,
  userLogoutAction,
} from 'hooks';
import { Link } from 'react-router-dom';
import {
  lightTheme,
  setTheme,
} from 'tui__theme/index.js';

export const Navbar = () => {
  const { loginUser, dispatchLoginUser, isAuth } = useLogin();
  const [globalThemeDark, setGlobalThemeDark] = useState(true);
  useEffect(() => {
    let theme = localStorage.getItem("lg2__theme");
    if (theme === "dark") {
      console.log("yess");
      setGlobalThemeDark(true);
      setTheme();
    } else if (theme === "light") {
      setGlobalThemeDark(false);
      setTheme({ theme: lightTheme });
    } else {
      setGlobalThemeDark(true);
      setTheme();
      localStorage.setItem("lg2__theme", "dark");
    }
  }, []);
  const toggleTheme = () => {
    if (globalThemeDark) {
      setTheme({ theme: lightTheme });
      localStorage.setItem("lg2__theme", "light");
      setGlobalThemeDark(false);
    } else {
      setTheme();
      localStorage.setItem("lg2__theme", "dark");
      setGlobalThemeDark(true);
    }
  };
  return (
    <nav className="tui__nav--box tui__pd-in-md tui__pd-tb-md">
      <h1 className="tui__nav--logo tui__h-3">
        <Link to="/">
          Log<sub>2</sub>
        </Link>
      </h1>
      <div className="tui__nav--mid tui__m-tb-xs">
        <span>
          <label htmlFor="search" className="tui__dis--none">
            Search
          </label>
          <input
            type="text"
            placeholder="Search"
            className="tui__input--val"
            id="search"
          />
        </span>
      </div>
      <ul className="tui__nav--list">
        {isAuth() && (
          <li className="tui__flex--center tui__active tui__avatar-md tui__avatar-br-lg">
            <Link to="/profile">{loginUser.username[0].toUpperCase()}</Link>
          </li>
        )}
        <li>
          <button
            className="tui__btn--link-br-none tui__m-in-xxs"
            onClick={() => dispatchLoginUser(userLogoutAction())}
          >
            {isAuth() ? (
              <Link to="/">Log out</Link>
            ) : (
              <Link to="/user/login">Log in</Link>
            )}
          </button>
        </li>
        <li>
          <div
            className="tui__avatar-br-lg tui__flex--center tui__avatar-md tui__cursor--pointer tui__m-in-xxs"
            onClick={() => {
              toggleTheme();
            }}
          >
            <img
              className="tui__theme--switch tui__col--svg tui__img-hw100"
              src={`${BASE_IMG_URL}/${SVG_IMG}/${
                globalThemeDark ? "moon" : "sun"
              }.svg`}
            />
          </div>
        </li>
        <li>
          <Link to="/user/wishlist">
            <div className="tui__avatar-br-lg tui__flex--center tui__avatar-md tui__m-in-xxs">
              <img
                className="tui__theme--switch tui__col--svg tui__img-hw100"
                src={`${BASE_IMG_URL}/${SVG_IMG}/hollowheart.svg`}
              />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/user/cart">
            <div className="tui__avatar-br-lg tui__flex--center tui__avatar-md tui__m-in-xxs">
              <img
                className="tui__theme--switch tui__col--svg tui__img-hw100"
                src={`${BASE_IMG_URL}/${SVG_IMG}/cart.svg`}
              />
            </div>
          </Link>
        </li>
        <li>
          <button className="tui__btn--link-br-none ">
            <Link to="/products">Shop now</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};
