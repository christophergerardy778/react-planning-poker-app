import { User } from '../../user/domain/User.ts';
import { GameIssue } from '../../gameIssue/domain/GameIssue.ts';

export type GameVote = {
  id: string;
  userId: User["id"];
  vote: string | number;
  issueId: GameIssue["id"];
}