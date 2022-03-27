import {
  FORGOT_PASS_ROUTE,
  USER_LOGIN_ROUTE,
  USER_SIGNUP_ROUTE,
} from 'consts';
// @ts-ignore
import Mockman from 'mockman-js';
import {
  ForgotPass,
  Home,
  Login,
  Signup,
} from 'pages';
import {
  Route,
  Routes,
} from 'react-router-dom';

import {
  Footer,
  LoggedOutRoute,
  Navbar,
  ProtectedRoute,
} from './components';

export default function App() {
  return (
    <div className="App">
      <header className="lg2__header">
        <Navbar />
      </header>
      <main className="lg2__main tui__m-xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<LoggedOutRoute />}>
            <Route path={USER_LOGIN_ROUTE} element={<Login />} />
            <Route path={USER_SIGNUP_ROUTE} element={<Signup />} />
            <Route path={FORGOT_PASS_ROUTE} element={<ForgotPass />} />
          </Route>
          <Route path="/" element={<ProtectedRoute />}>
            <Route
              path="/user"
              element={<h1>User page is under construction</h1>}
            />
            <Route
              path="/user/cart"
              element={<h1>cart page is under construction</h1>}
            />
            <Route
              path="/user/wishlist"
              element={<h1>wishlist page is under construction</h1>}
            />
          </Route>
          <Route path="/mockman" element={<Mockman />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
