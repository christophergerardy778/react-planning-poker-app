import { GameIssue } from './GameIssue.ts';

export type CreateGameIssue = Omit<GameIssue, 'id'>;