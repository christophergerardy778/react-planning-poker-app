import { createBrowserRouter } from 'react-router-dom';
import { authRoutes } from '../auth/routes/authRoutes.tsx';

export const router = createBrowserRouter([
  ...authRoutes,
]);