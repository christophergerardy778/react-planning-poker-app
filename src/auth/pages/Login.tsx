import { TextField } from '../../main/components/TextField.tsx';
import { useFormik } from 'formik';
import { object, string } from 'yup';

export const Login = () => {
  const schema = object({
    name: string().required(),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema: schema,

    onSubmit: (values) => {
      console.log('hola mundo');
      console.log(values);
    }
  });

  return (
    <div className={'mx-auto container mt-6'}>
      Login

      <br/>
      <br/>

      <form onSubmit={ formik.handleSubmit } className={'flex flex-col gap-y-4'}>
        <TextField
          name={ 'name' }
          placeholder={'John Doe'}
          label={'Firstname'}
          type={ 'text' }
          value={ formik.values.name }
          onChange={ formik.handleChange }
        />

        <TextField
          name={ 'email' }
          label={'Email Address'}
          type={ 'email' }
          disabled={ true }
          value={ formik.values.email }
          onChange={ formik.handleChange }
        />

        <TextField
          name={ 'password' }
          label={'Password'}
          type={ 'password' }
          value={ formik.values.password }
          onChange={ formik.handleChange }
        />

        <button type="submit">
          Login
        </button>

        <pre>
          { JSON.stringify(formik.values, null, 2) }
        </pre>

        <pre>
          { JSON.stringify(formik.errors, null, 2) }
        </pre>
      </form>
    </div>
  );
}