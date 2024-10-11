import { object, string } from 'yup';

export const createGameIssueValidationSchema = object({
  description: string().required(),
})