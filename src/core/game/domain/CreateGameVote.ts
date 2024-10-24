import { GameVote } from './GameVote.ts';

export type CreateGameVote = Omit<GameVote, 'id'>;
