import { RouteObject } from 'react-router-dom';
import { ProtectedRoute } from '../../main/components/ProtectedRoute.tsx';
import { GameHome } from '../pages/GameHome.tsx';
import { CreateNewGame } from '../pages/CreateNewGame.tsx';
import { MainLayout } from '../../main/layout/MainLayout.tsx';

export const gameRoutes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: '',
            element: <GameHome />
          },
          {
            path: 'create-new-game',
            element: <CreateNewGame />
          }
        ],
      }
    ]
  }
]