import { RouteObject } from 'react-router-dom';
import { Login } from '../pages/Login.tsx';
import { Register } from '../pages/Register.tsx';

export const authRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  }
];
