import { TextField } from '../../main/components/TextField.tsx';
import { useFormik } from 'formik';
import { loginValidationSchema } from '../validation/LoginValidationSchema.ts';

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema: loginValidationSchema,

    onSubmit: (values) => {
      console.log('hola mundo');
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
        error={formik.errors.email}
      />

      <button
        type="submit"
        className={'bg-blue-500 text-white p-2 rounded-lg select-none'}
      >
        Continuar
      </button>
    </form>
  )
}