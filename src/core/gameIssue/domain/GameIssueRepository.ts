import { CreateGameIssue } from './CreateGameIssue.ts';
import { GameIssue } from './GameIssue.ts';

export interface GameIssueRepository {
  create(issue: CreateGameIssue): Promise<GameIssue>;
  findAllById(id: string): Promise<GameIssue[]>;
}