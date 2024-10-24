import { GameVote } from './GameVote.ts';
import { GameIssue } from '../../gameIssue/domain/GameIssue.ts';

export type FindGameVoteByGameAndId = {
  userId: GameVote["userId"];
  issueId: GameIssue["id"];
}
