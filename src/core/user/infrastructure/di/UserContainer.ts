import { ContainerModule } from 'inversify';
import { AllUsersRepository } from '../../domain/AllUsersRepository.ts';
import { userTypes } from './UserTypes.ts';
import { AllUsersFirebaseRepository } from '../persistence/AllUsersFirebaseRepository.ts';
import { CreateUserWithEmail } from '../../app/CreateUserWithEmail.ts';
import { FindUserByEmail } from '../../app/FindUserByEmail.ts';
import { LoginByEmail } from '../../app/LoginByEmail.ts';

export const userContainer = new ContainerModule((bind) => {
  bind<AllUsersRepository>(userTypes.allUsersRepository).to(
    AllUsersFirebaseRepository
  );

  bind<CreateUserWithEmail>(userTypes.createUserWithEmail).to(
    CreateUserWithEmail
  );

  bind<FindUserByEmail>(userTypes.findUserByEmail).to(
    FindUserByEmail
  );

  bind<LoginByEmail>(userTypes.loginByEmail).to(
    LoginByEmail
  );
});
