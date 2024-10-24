import { inject, injectable } from 'inversify';
import { gameTypes } from '../../infrastructure/di/GameTypes.ts';
import { type AllGameVotesRepository } from '../../domain/AllGameVotesRepository.ts';
import { GameVote } from '../../domain/GameVote.ts';
import { FindGameVoteByGameAndId } from '../../domain/FindGameVoteByGameAndId.ts';

@injectable()
export class FindGameVote {
  constructor(
    @inject(gameTypes.allGameVotesRepository)
    private readonly allGameVotesRepository: AllGameVotesRepository,
  ) {}

  public run(payload: FindGameVoteByGameAndId): Promise<GameVote | null> {
    return this.allGameVotesRepository.findByUserAndVoteId(payload);
  }
}