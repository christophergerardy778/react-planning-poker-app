import { Game } from './Game.ts';
import { CreateNewGame } from './CreateNewGame.ts';

export interface AllGamesRepository {
  create(game: CreateNewGame): Promise<Game>;
  findGameById(gameId: Game['id']): Promise<Game | null>;
}