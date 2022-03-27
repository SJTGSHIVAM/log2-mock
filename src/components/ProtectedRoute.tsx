import { useLogin } from 'hooks';
import {
  Navigate,
  Outlet,
} from 'react-router-dom';

export const ProtectedRoute = () => {
  const { isAuth } = useLogin();

  return isAuth() ? <Outlet /> : <Navigate to="/user/login" />;
};
