import { TextField } from '../../../main/components/TextField.tsx';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Btn } from '../../../main/components/Btn.tsx';
import { registerValidationSchema } from '../../validation/RegisterValidationSchema.ts';
import { useFormikError } from '../../../main/hooks/useFormikError.ts';
import { useAuth } from '../../hooks/useAuth.ts';

export const RegisterForm = () => {
  const { t } = useTranslation(['common']);
  const { registerUserWithEmail, authSelector } = useAuth();
  const { showErrorOnTouch } = useFormikError();

  const formik = useFormik({
    validationSchema: registerValidationSchema,
    
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    onSubmit(values) {
      registerUserWithEmail(values);
    },
  });

  return (
    <form className={'flex flex-col gap-y-6'} onSubmit={formik.handleSubmit}>
      <TextField
        label={t('name')}
        name={'name'}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={showErrorOnTouch(formik, 'name')}
        disabled={authSelector.loading}
      />

      <TextField
        label={t('email')}
        name={'email'}
        type={'email'}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={showErrorOnTouch(formik, 'email')}
        disabled={authSelector.loading}
      />

      <TextField
        label={t('password')}
        name={'password'}
        type={'password'}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={showErrorOnTouch(formik, 'password')}
        disabled={authSelector.loading}
      />

      <Btn
        disabled={authSelector.loading}
        type={'submit'}
        className={'ripple-bg-blue-500 text-white'}
      >
        {t('register')}
      </Btn>
    </form>
  );
};
