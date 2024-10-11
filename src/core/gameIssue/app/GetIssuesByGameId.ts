import { inject, injectable } from 'inversify';
import { gameIssueTypes } from '../infrastructure/di/GameIssueTypes.ts';
import { type GameIssueRepository } from '../domain/GameIssueRepository.ts';
import { Game } from '../../game/domain/Game.ts';

@injectable()
export class GetIssuesByGameId {
  constructor(
    @inject(gameIssueTypes.gameIssueRepository)
    private readonly gameIssueRepository: GameIssueRepository
  ) {}

  public run(gameId: Game['id']) {
    return this.gameIssueRepository.findAllById(gameId);
  }
}