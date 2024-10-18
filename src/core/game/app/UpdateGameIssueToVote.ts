import { inject, injectable } from 'inversify';
import { gameTypes } from '../infrastructure/di/GameTypes.ts';
import { type AllGamesRepository } from '../domain/AllGamesRepository.ts';
import { SelectIssueIdToGame } from '../domain/SelectIssueIdToGame.ts';

@injectable()
export class UpdateGameIssueToVote {
  constructor(
    @inject(gameTypes.allGamesRepository)
    private readonly allGamesRepository: AllGamesRepository,
  ) {}

  public async run(payload: SelectIssueIdToGame) {
    await this.allGamesRepository.selectIssueToVote(payload);
  }
}