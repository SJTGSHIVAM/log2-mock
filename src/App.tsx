import 'react-toastify/dist/ReactToastify.css';
import 'app.css';

import {
  FORGOT_PASS_ROUTE,
  USER_LOGIN_ROUTE,
  USER_SIGNUP_ROUTE,
} from 'consts';
// @ts-ignore
import Mockman from 'mockman-js';
import {
  Cart,
  ForgotPass,
  Home,
  Login,
  ProductList,
  Signup,
  Wishlist,
} from 'pages';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

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
        <ToastContainer
          position="top-left"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/" element={<LoggedOutRoute />}>
            <Route path={USER_LOGIN_ROUTE} element={<Login />} />
            <Route path={USER_SIGNUP_ROUTE} element={<Signup />} />
            <Route path={FORGOT_PASS_ROUTE} element={<ForgotPass />} />
          </Route>
          <Route path="/user" element={<ProtectedRoute />}>
            <Route path="" element={<h1>User page is under construction</h1>} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
          <Route path="/mockman" element={<Mockman />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
