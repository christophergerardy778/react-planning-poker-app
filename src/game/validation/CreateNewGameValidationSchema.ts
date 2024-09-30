import { object, string } from 'yup';

export const createNewGameValidationSchema = object({
  game_name: string().required(),
  voting_system: string().required()
})