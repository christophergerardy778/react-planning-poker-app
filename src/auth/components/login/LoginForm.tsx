import { TextField } from '../../../main/components/TextField.tsx';
import { useFormik } from 'formik';
import { loginValidationSchema } from '../../validation/LoginValidationSchema.ts';
import { Btn } from '../../../main/components/Btn.tsx';
import { useFormikError } from '../../../main/hooks/useFormikError.ts';

type LoginPayload = {
  name: string;
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { showErrorOnTouch } = useFormikError();

  const formik = useFormik<LoginPayload>({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema: loginValidationSchema,

    onSubmit: (values) => {
      console.log(values);
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
      />

      <TextField
        name={'password'}
        label={'Password'}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={showErrorOnTouch(formik, 'password')}
      />

      <Btn
        type={'submit'}
        className={'ripple-bg-blue-500 text-white'}
      >
        Continuar
      </Btn>
    </form>
  )
}