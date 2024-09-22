import { RegisterForm } from '../components/register/RegisterForm.tsx';
import { InlineDivisor } from '../components/InlineDivisor.tsx';
import { Btn } from '../../main/components/Btn.tsx';
import { useTranslation } from 'react-i18next';
import { AuthLayout } from '../layout/AuthLayout.tsx';
import { AppLink } from '../../main/components/AppLink.tsx';

export const Register = () => {
  const { t } = useTranslation(['register', 'common', 'login']);

  return (
    <AuthLayout>
      <div
        className={
          'px-4 container mx-auto flex justify-center items-center'
        }
      >
        <div className={'max-w-[400px] flex flex-col gap-y-6'}>
          <div className={'flex flex-col gap-y-2'}>
            <h1 className={'text-center text-3xl leading-relaxed'}>
              {t('form_title')}
            </h1>

            <p className={'text-center text-lg text-gray-500 font-semibold'}>
              {t('form_subtitle')}
            </p>
          </div>

          <div className={'w-full flex flex-col gap-y-6'}>
            <Btn
              outline
              className={'border-gray-300 ripple-bg-white w-full'}
            >
              {t('login_with_google', { ns: 'common' })}
            </Btn>

            <InlineDivisor />

            <RegisterForm />

            <span className={'text-center text-sm'}>
              {t('do_you_already_have_an_account')}&nbsp;

              <AppLink to={'/login'}>
                {t('login', { ns: 'login' })}
              </AppLink>
            </span>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
