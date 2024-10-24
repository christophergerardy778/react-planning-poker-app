import { inject, injectable } from 'inversify';
import { type AllGamesRepository } from '../../domain/AllGamesRepository.ts';
import { gameTypes } from '../../infrastructure/di/GameTypes.ts';
import { Game } from '../../domain/Game.ts';
import { GameNotFound } from '../../domain/exception/GameNotFound.ts';

@injectable()
export class FindGameById {
  constructor(
    @inject(gameTypes.allGamesRepository)
    private readonly allGamesRepository: AllGamesRepository
  ) {}

  public async run(gameId: Game['id']): Promise<Game> {
    const game = await this.allGamesRepository.findGameById(gameId);

    if (!game) {
      throw new GameNotFound();
    }

    return game;
  }
}