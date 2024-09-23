import { TextField } from '../../../main/components/TextField.tsx';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Btn } from '../../../main/components/Btn.tsx';
import {
  registerValidationSchema
} from '../../validation/RegisterValidationSchema.ts';
import { useFormikError } from '../../../main/hooks/useFormikError.ts';
import { useDispatch } from 'react-redux';
import { startRegisterUserWithEmail } from '../../store/thunks.ts';
import { UnknownAction } from '@reduxjs/toolkit';

export const RegisterForm = () => {
  const { t } = useTranslation(['common']);
  const dispatch = useDispatch();

  const { showErrorOnTouch } = useFormikError();

  const formik = useFormik({
    validationSchema: registerValidationSchema,

    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    onSubmit(values) {
      dispatch(startRegisterUserWithEmail(values) as unknown as UnknownAction);
    },
  });

  return (
    <form
      className={'flex flex-col gap-y-6'}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        label={t('name')}
        name={'name'}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={showErrorOnTouch(formik, 'name')}
      />

      <TextField
        label={t('email')}
        name={'email'}
        type={'email'}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={showErrorOnTouch(formik, 'email')}
      />

      <TextField
        label={t('password')}
        name={'password'}
        type={'password'}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={showErrorOnTouch(formik, 'password')}
      />

      <Btn
        type={'submit'}
        className={'ripple-bg-blue-500 text-white'}
      >
        { t('register') }
      </Btn>
    </form>
  );
};
