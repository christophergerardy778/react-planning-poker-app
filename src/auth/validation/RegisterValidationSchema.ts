import { object, string } from 'yup';

export const registerValidationSchema = object({
  name: string().required(),
  email: string().required().email(),
  password: string().required(),
});