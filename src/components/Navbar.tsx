import {
  BASE_IMG_URL,
  PNG_IMG,
  SVG_IMG,
} from 'consts';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav className="tui__nav--box tui__pd-in-xl tui__pd-tb-md">
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
      <li>
        <Link to="/profile">
          <div className="tui__avatar-br-lg tui__flex--center tui__avatar-md tui__m-in-xs">
            <img
              className="tui__img-hw100"
              src={`${BASE_IMG_URL}/${PNG_IMG}/buyer.png`}
              alt="user icon"
            />
          </div>
        </Link>
      </li>
      <li>
        <button className="tui__btn--link-br-none tui__m-in-xs">
          <Link to="/user/login">Log in</Link>
        </button>
      </li>
      <li>
        <div className="tui__avatar-br-lg tui__flex--center tui__avatar-md tui__m-in-xs">
          <img
            className="tui__theme--switch tui__col--svg tui__img-hw100"
            src={`${BASE_IMG_URL}/${SVG_IMG}/moon.svg`}
          />
        </div>
      </li>
      <li>
        <Link to="/wishlist">
          <div className="tui__avatar-br-lg tui__flex--center tui__avatar-md tui__m-in-xs">
            <img
              className="tui__theme--switch tui__col--svg tui__img-hw100"
              src={`${BASE_IMG_URL}/${SVG_IMG}/hollowheart.svg`}
            />
          </div>
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <div className="tui__avatar-br-lg tui__flex--center tui__avatar-md tui__m-in-xs">
            <img
              className="tui__theme--switch tui__col--svg tui__img-hw100"
              src={`${BASE_IMG_URL}/${SVG_IMG}/cart.svg`}
            />
          </div>
        </Link>
      </li>
      <li>
        <button className="tui__btn--link-br-none tui__m-in-xs">
          <Link to="/products">Shop now</Link>
        </button>
      </li>
    </ul>
  </nav>
);
