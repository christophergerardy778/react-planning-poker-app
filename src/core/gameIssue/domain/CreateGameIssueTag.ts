import { GameIssue } from './GameIssue.ts';

export type CreateGameIssueTag = {
  tagName: string;
  issueId: GameIssue['id'];
}
