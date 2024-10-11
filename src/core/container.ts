import { Container } from 'inversify';
import { userContainer } from './user/infrastructure/di/UserContainer.ts';
import { gameContainer } from './game/infrastructure/di/GameContainer.ts';
import {
  gameIssueContainer
} from './gameIssue/infrastructure/di/GameIssueContainer.ts';

const container = new Container();

container.load(...[
  userContainer,
  gameContainer,
  gameIssueContainer,
]);

export { container };
