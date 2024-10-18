import { User } from '../../user/domain/User.ts';
import { GameVotingSystem } from './GameVotingSystem.ts';
import { GameIssue } from '../../gameIssue/domain/GameIssue.ts';

export interface Game {
  id: string;
  name: string;
  user_id: User['id'];
  voting_system: GameVotingSystem;
  selectedIssueId?: GameIssue['id'] | undefined;
}
