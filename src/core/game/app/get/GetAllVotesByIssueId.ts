import { inject, injectable } from 'inversify';
import { gameTypes } from '../../infrastructure/di/GameTypes.ts';
import { type AllGameVotesRepository } from '../../domain/AllGameVotesRepository.ts';
import { GameVote } from '../../domain/GameVote.ts';

@injectable()
export class GetAllVotesByIssueId {
  constructor(
    @inject(gameTypes.allGameVotesRepository)
    private readonly allGameVotesRepository: AllGameVotesRepository
  ) {}

  public run(issueId: GameVote["issueId"]): Promise<GameVote[]> {
    return this.allGameVotesRepository.getAllVotesByIssueId(issueId);
  }
}
