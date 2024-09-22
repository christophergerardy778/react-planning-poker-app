import { InlineDivisor } from '../components/InlineDivisor.tsx';
import { LoginForm } from '../components/login/LoginForm.tsx';
import { Btn } from '../../main/components/Btn.tsx';

export const Login = () => {
  return (
    <div
      className={'max-w-[400px] h-screen mx-auto flex flex-col items-center justify-center gap-y-6'}
    >
      <div className={'w-full flex flex-col gap-y-2'}>
        <h1 className={'text-center text-3xl leading-relaxed'}>
          Te damos la bienvenida a Planning poker
        </h1>

        <p className={'text-center text-lg text-gray-500 font-semibold'}>
          Para comenzar, inicia sesión.
        </p>
      </div>

      <Btn
        outline
        className={'border-gray-300 ripple-bg-white w-full'}
      >
        Login with google
      </Btn>

      <InlineDivisor />

      <LoginForm />
    </div>
  );
};