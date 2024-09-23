import { Container } from 'inversify';
import { userContainer } from './user/infrastructure/di/UserContainer.ts';

const container = new Container();

container.load(...[
  userContainer,
]);

export { container };
