import { Game } from './Game.ts';
import { CreateNewGame } from './CreateNewGame.ts';

export interface AllGamesRepository {
  create(game: CreateNewGame): Promise<Game>;
}