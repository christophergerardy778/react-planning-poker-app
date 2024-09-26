import { TextField } from '../../../main/components/TextField.tsx';
import { useFormik } from 'formik';
import { loginValidationSchema } from '../../validation/LoginValidationSchema.ts';
import { Btn } from '../../../main/components/Btn.tsx';
import { useFormikError } from '../../../main/hooks/useFormikError.ts';
import { AppLink } from '../../../main/components/AppLink.tsx';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth.ts';

type LoginPayload = {
  name: string;
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { t } = useTranslation(['login']);
  const { loginByEmail, authSelector } = useAuth();
  const { showErrorOnTouch } = useFormikError();

  const formik = useFormik<LoginPayload>({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema: loginValidationSchema,

    onSubmit: (values) => {
      loginByEmail(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={'flex flex-col gap-y-6 w-full'}
    >
      <TextField
        name={'email'}
        label={'Dirección de email'}
        type={'email'}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={showErrorOnTouch(formik, 'email')}
        disabled={authSelector.loading}
      />

      <div className={'w-full flex flex-col gap-y-3'}>
        <TextField
          name={'password'}
          label={'Password'}
          type={'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={showErrorOnTouch(formik, 'password')}
          disabled={authSelector.loading}
        />

        <AppLink to={'/'} className={'text-sm text-right hover:underline'}>
          { t('forgot_your_password') }
        </AppLink>
      </div>

      <Btn
        type={'submit'}
        className={'ripple-bg-blue-500 text-white'}
        disabled={authSelector.loading}
      >
        { t('login') }
      </Btn>
    </form>
  );
}