import { GameIssueState } from './GameIssueState.ts';

export type GameIssue = {
  id: string;
  gameId: string;
  description: string;
  state: GameIssueState;
  tags: string[]
}