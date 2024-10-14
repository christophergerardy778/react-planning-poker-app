import { CreateGameIssue } from './CreateGameIssue.ts';
import { GameIssue } from './GameIssue.ts';
import { CreateGameIssueTag } from './CreateGameIssueTag.ts';

export interface GameIssueRepository {
  create(issue: CreateGameIssue): Promise<GameIssue>;
  addTag(issueTag: CreateGameIssueTag): Promise<GameIssue>;
  findAllById(id: string): Promise<GameIssue[]>;
}