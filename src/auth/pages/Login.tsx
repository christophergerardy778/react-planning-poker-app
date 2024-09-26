import { InlineDivisor } from '../components/InlineDivisor.tsx';
import { LoginForm } from '../components/login/LoginForm.tsx';
import { Btn } from '../../main/components/Btn.tsx';
import { useTranslation } from 'react-i18next';
import { FormAuthHeader } from '../components/FormAuthHeader.tsx';
import { AppLink } from '../../main/components/AppLink.tsx';
import { ErrorNotification } from '../components/ErrorNotification.tsx';
import { useAuth } from '../hooks/useAuth.ts';
import { useEffect } from 'react';

export const Login = () => {
  const { t } = useTranslation(['common', 'login', 'errors']);
  const { authSelector, resetLoginError } = useAuth();

  useEffect(() => resetLoginError(), []);

  return (
    <div className={'px-4 container mx-auto flex justify-center items-center'}>
      <div className={'max-w-[400px] flex flex-col gap-y-6'}>
        <FormAuthHeader
          title={t('form_title', { ns: 'login' })}
          subTitle={t('form_subtitle', { ns: 'login' })}
        />

        <div className={'w-full flex flex-col gap-y-6'}>
          <Btn outline className={'border-gray-300 ripple-bg-white w-full'}>
            {t('continue_with_google', { ns: 'common' })}
          </Btn>

          <InlineDivisor />

          <ErrorNotification
            isVisible={authSelector.loginError.visible}
            errorMessage={t(authSelector.loginError.error, { ns: 'errors' })}
          />

          <LoginForm />

          <span className={'text-center text-sm'}>
            { t('dont_have_an_account', { ns: 'login' }) }&nbsp;

            <AppLink to={'/register'}>
              { t('register') }
            </AppLink>
          </span>
        </div>
      </div>
    </div>
  );
}
