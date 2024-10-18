import { Game } from './Game.ts';
import { GameIssue } from '../../gameIssue/domain/GameIssue.ts';

export type SelectIssueIdToGame = {
  gameId: Game['id'];
  issueId: GameIssue['id'];
}