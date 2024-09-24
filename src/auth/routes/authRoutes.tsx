import { RouteObject } from 'react-router-dom';
import { Login } from '../pages/Login.tsx';
import { Register } from '../pages/Register.tsx';
import { AuthLayout } from '../layout/AuthLayout.tsx';
import { PublicRoute } from '../../main/components/PublicRoute.tsx';

export const authRoutes: RouteObject[] = [
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/register',
            element: <Register />,
          },
        ]
      }
    ]
  }
];
