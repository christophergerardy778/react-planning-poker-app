import { Container } from 'inversify';
import { userContainer } from './user/infrastructure/di/UserContainer.ts';
import { gameContainer } from './game/infrastructure/di/GameContainer.ts';

const container = new Container();

container.load(...[
  userContainer,
  gameContainer,
]);

export { container };
