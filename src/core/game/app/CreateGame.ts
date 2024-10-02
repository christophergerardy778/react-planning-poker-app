import { inject, injectable } from 'inversify';
import { type AllGamesRepository } from '../domain/AllGamesRepository.ts';
import { Game } from '../domain/Game.ts';
import { CreateNewGame } from '../domain/CreateNewGame.ts';
import { gameTypes } from '../infrastructure/di/GameTypes.ts';

@injectable()
export class CreateGame {
  constructor(
    @inject(gameTypes.allGamesRepository)
    private readonly allGamesRepository: AllGamesRepository,
  ) {}

  public run(game: CreateNewGame): Promise<Game> {
    return this.allGamesRepository.create(game);
  }
}
