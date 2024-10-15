import { inject, injectable } from 'inversify';
import { gameIssueTypes } from '../infrastructure/di/GameIssueTypes.ts';
import { type GameIssueRepository } from '../domain/GameIssueRepository.ts';
import { Game } from '../../game/domain/Game.ts';

@injectable()
export class DeleteGameIssue {
  constructor(
    @inject(gameIssueTypes.gameIssueRepository)
    private readonly gameIssueRepository: GameIssueRepository
  ) {}

  public async run(gameId: Game['id']) {
    await this.gameIssueRepository.deleteById(gameId);
  }
}