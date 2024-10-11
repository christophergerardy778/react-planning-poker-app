import { inject, injectable } from 'inversify';
import { type GameIssueRepository } from '../domain/GameIssueRepository.ts';
import { gameIssueTypes } from '../infrastructure/di/GameIssueTypes.ts';
import { CreateGameIssue } from '../domain/CreateGameIssue.ts';

@injectable()
export class CreateIssueGame {
  constructor(
    @inject(gameIssueTypes.gameIssueRepository)
    private readonly gameIssueRepository: GameIssueRepository
  ) {}

  public run(gameIssue: CreateGameIssue) {
    return this.gameIssueRepository.create(gameIssue);
  }
}
