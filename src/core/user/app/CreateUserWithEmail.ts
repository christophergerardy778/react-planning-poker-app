import { type AllUsersRepository } from '../domain/AllUsersRepository.ts';
import { UserWithEmail } from '../domain/UserWithEmail.ts';
import { User } from '../domain/User.ts';
import { inject, injectable } from 'inversify';
import { userTypes } from '../infrastructure/di/UserTypes.ts';

@injectable()
export class CreateUserWithEmail {
  constructor(@inject(userTypes.allUsersRepository) private allUserRepository: AllUsersRepository) {}

  public async run(user: UserWithEmail): Promise<User> {
    return this.allUserRepository.createUserByEmail(user);
  }
}