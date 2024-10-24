import { inject, injectable } from 'inversify';
import { gameTypes } from '../../infrastructure/di/GameTypes.ts';
import { type AllGameVotesRepository } from '../../domain/AllGameVotesRepository.ts';
import { CreateGameVote } from '../../domain/CreateGameVote.ts';
import { GameVote } from '../../domain/GameVote.ts';

@injectable()
export class CreateVote {
  constructor(
    @inject(gameTypes.allGameVotesRepository)
    private readonly allGameVotesRepository: AllGameVotesRepository
  ) {}

  public run(payload: CreateGameVote): Promise<GameVote> {
    return this.allGameVotesRepository.create(payload);
  }
}