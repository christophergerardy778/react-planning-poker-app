import { object, string } from 'yup';

export const loginValidationSchema = object({
  name: string().required(),
  email: string().required().email(),
  password: string().required(),
});