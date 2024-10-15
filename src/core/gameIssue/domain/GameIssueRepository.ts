import { CreateGameIssue } from './CreateGameIssue.ts';
import { GameIssue } from './GameIssue.ts';
import { CreateGameIssueTag } from './CreateGameIssueTag.ts';
import { RemoveGameIssueTag } from './RemoveGameIssueTag.ts';

export interface GameIssueRepository {
  create(issue: CreateGameIssue): Promise<GameIssue>;
  findAllById(id: string): Promise<GameIssue[]>;
  deleteById(id: GameIssue['id']): Promise<void>;
  addTag(issueTag: CreateGameIssueTag): Promise<GameIssue>;
  removeTag(payload: RemoveGameIssueTag): Promise<GameIssue>;
}