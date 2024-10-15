import { inject, injectable } from 'inversify';
import { gameIssueTypes } from '../infrastructure/di/GameIssueTypes.ts';
import { type GameIssueRepository } from '../domain/GameIssueRepository.ts';
import { RemoveGameIssueTag } from '../domain/RemoveGameIssueTag.ts';
import { GameIssue } from '../domain/GameIssue.ts';

@injectable()
export class RemoveTagToGameIssue {
  constructor(
    @inject(gameIssueTypes.gameIssueRepository)
    private readonly gameIssueRepository: GameIssueRepository,
  ) {}

  public async run(payload: RemoveGameIssueTag): Promise<GameIssue> {
    return this.gameIssueRepository.removeTag(payload);
  }
}