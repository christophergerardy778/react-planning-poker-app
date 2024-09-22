import { FormikState } from 'formik';

export const useFormikError = () => {
  const showErrorOnTouch = <T>(formik: FormikState<T>, key: string): string => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return formik.touched[key] ? formik.errors[key] : '';
  };

  return {
    showErrorOnTouch,
  }
}