import { User } from '../../user/domain/User.ts';
import { GameVotingSystem } from './GameVotingSystem.ts';

export interface Game {
  id: string;
  name: string;
  user_id: User['id'];
  voting_system: GameVotingSystem;
}
