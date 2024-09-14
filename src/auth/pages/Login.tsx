import { LoginInlineDivisor } from '../components/LoginInlineDivisor.tsx';
import { LoginForm } from '../components/LoginForm.tsx';

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

      <button
        className={'bg-white text-black font-light select-none border border-gray-300 p-2 rounded-lg w-full'}
      >
        Login with google
      </button>

      <LoginInlineDivisor />

      <LoginForm />
    </div>
  );
};