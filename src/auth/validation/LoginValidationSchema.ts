import { object, string } from 'yup';

export const loginValidationSchema = object({
  email: string().required().email(),
  password: string().required(),
});