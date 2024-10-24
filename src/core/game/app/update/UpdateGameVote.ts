import { inject, injectable } from 'inversify';
import { gameTypes } from '../../infrastructure/di/GameTypes.ts';
import { type AllGameVotesRepository } from '../../domain/AllGameVotesRepository.ts';
import { GameVote } from '../../domain/GameVote.ts';
import type { CreateGameVote } from '../../domain/CreateGameVote.ts';


@injectable()
export class UpdateGameVote {
  constructor(
    @inject(gameTypes.allGameVotesRepository)
    private readonly allGameVotesRepository: AllGameVotesRepository
  ) {}

  public run(payload: CreateGameVote): Promise<GameVote> {
    return this.allGameVotesRepository.updateVote(payload);
  }
}