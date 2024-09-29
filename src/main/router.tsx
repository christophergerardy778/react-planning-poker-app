import { createBrowserRouter } from 'react-router-dom';
import { authRoutes } from '../auth/routes/authRoutes.tsx';
import { gameRoutes } from '../game/routes/gameRoutes.tsx';

export const router = createBrowserRouter([
  ...authRoutes,
  ...gameRoutes,
]);