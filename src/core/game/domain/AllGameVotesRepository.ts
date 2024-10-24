import { CreateGameVote } from './CreateGameVote.ts';
import { GameVote } from './GameVote.ts';
import { FindGameVoteByGameAndId } from './FindGameVoteByGameAndId.ts';

export interface AllGameVotesRepository {
  create(payload: CreateGameVote): Promise<GameVote>;
  findByUserAndVoteId(payload: FindGameVoteByGameAndId): Promise<GameVote | null>;
  updateVote(payload: CreateGameVote): Promise<GameVote>;
}