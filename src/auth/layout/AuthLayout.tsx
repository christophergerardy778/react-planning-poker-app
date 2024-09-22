import { AuthLayoutFooter } from '../components/authLayout/AuthLayoutFooter.tsx';
import { AuthLayoutHeader } from '../components/authLayout/AuthLayoutHeader.tsx';

type Props = {
  children: JSX.Element;
};

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className={'flex flex-col justify-between min-h-screen'}>
      <AuthLayoutHeader />
      <main>{children}</main>
      <AuthLayoutFooter />
    </div>
  );
};
