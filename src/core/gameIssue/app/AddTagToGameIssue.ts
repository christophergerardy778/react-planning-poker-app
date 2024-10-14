import { inject, injectable } from 'inversify';
import { type GameIssueRepository } from '../domain/GameIssueRepository.ts';
import { gameIssueTypes } from '../infrastructure/di/GameIssueTypes.ts';
import { CreateGameIssueTag } from '../domain/CreateGameIssueTag.ts';
import { GameIssue } from '../domain/GameIssue.ts';

@injectable()
export class AddTagToGameIssue {
  constructor(
    @inject(gameIssueTypes.gameIssueRepository)
    private readonly gameIssueRepository: GameIssueRepository,
  ) {}

  public async run(payload: CreateGameIssueTag): Promise<GameIssue> {
    return this.gameIssueRepository.addTag(payload)
  }
}