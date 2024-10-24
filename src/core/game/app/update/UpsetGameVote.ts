import { inject, injectable } from 'inversify';
import { gameTypes } from '../../infrastructure/di/GameTypes.ts';
import { type CreateVote } from '../create/CreateVote.ts';
import { type CreateGameVote } from '../../domain/CreateGameVote.ts';
import { type GameVote } from '../../domain/GameVote.ts';
import { FindGameVote } from '../find/FindGameVote.ts';
import { UpdateGameVote } from './UpdateGameVote.ts';

@injectable()
export class UpsetGameVote {
  constructor(
    @inject(gameTypes.createVote)
    private readonly createGameVote: CreateVote,

    @inject(gameTypes.findGameVote)
    private readonly findGameVote: FindGameVote,

    @inject(gameTypes.updateGameVote)
    private readonly updateGameVote: UpdateGameVote,
  ) {}

  public async run(payload: CreateGameVote): Promise<GameVote> {
    const gameVoteExist = await this.findGameVote.run({
      userId: payload.userId,
      issueId: payload.issueId,
    });

    if (!gameVoteExist) {
      return this.createGameVote.run(payload);
    }

    return this.updateGameVote.run(payload);
  }
}
