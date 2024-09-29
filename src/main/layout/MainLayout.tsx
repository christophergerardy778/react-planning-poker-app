import { Outlet } from 'react-router-dom';
import {
  MainLayoutHeader
} from '../components/mainLayout/MainLayoutHeader.tsx';

export const MainLayout = () => {
  return (
    <div className={'min-h-screen'}>
      <MainLayoutHeader />

      <main>
        <Outlet />
      </main>
    </div>
  )
}