import { AuthLayoutFooter } from '../components/authLayout/AuthLayoutFooter.tsx';
import { AuthLayoutHeader } from '../components/authLayout/AuthLayoutHeader.tsx';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className={'flex flex-col justify-between min-h-screen'}>
      <AuthLayoutHeader />

      <main>
        <Outlet />
      </main>

      <AuthLayoutFooter />
    </div>
  );
};
