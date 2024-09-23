import { type AllUsersRepository } from '../domain/AllUsersRepository.ts';
import { UserWithEmail } from '../domain/UserWithEmail.ts';
import { User } from '../domain/User.ts';
import { inject, injectable } from 'inversify';
import { userTypes } from '../infrastructure/di/UserTypes.ts';
import { FindUserByEmail } from './FindUserByEmail.ts';
import { UserEmailAlreadyInUse } from '../domain/exception/UserEmailAlreadyInUse.ts';

@injectable()
export class CreateUserWithEmail {
  constructor(
    @inject(userTypes.allUsersRepository)
    private readonly allUserRepository: AllUsersRepository,
    @inject(userTypes.findUserByEmail)
    private readonly findUserByEmail: FindUserByEmail
  ) {}

  public async run(user: UserWithEmail): Promise<User> {
    const userExist = await this.findUserByEmail.run(user.email);

    if (userExist) {
      throw new UserEmailAlreadyInUse();
    }

    return this.allUserRepository.createUserByEmail(user);
  }
}
