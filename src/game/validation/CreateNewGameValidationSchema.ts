import { object, string } from 'yup';

export const createNewGameValidationSchema = object({
  name: string().required(),
  voting_system: string().required()
})