import { InlineDivisor } from '../components/InlineDivisor.tsx';
import { LoginForm } from '../components/login/LoginForm.tsx';
import { Btn } from '../../main/components/Btn.tsx';
import { useTranslation } from 'react-i18next';

export const Login = () => {
  const { t } = useTranslation(['common']);

  return (
    <div
      className={'max-w-[400px] mx-auto flex flex-col items-center justify-center gap-y-6'}
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
        { t('continue_with_google') }
      </Btn>

      <InlineDivisor />

      <LoginForm />
    </div>
  );
};