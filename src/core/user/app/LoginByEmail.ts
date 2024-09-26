import { type AllUsersRepository } from '../domain/AllUsersRepository.ts';
import { inject, injectable } from 'inversify';
import { userTypes } from '../infrastructure/di/UserTypes.ts';
import { User } from '../domain/User.ts';
import {
  UserCredentialsIncorrect
} from '../domain/exception/UserCredentialsIncorrect.ts';

@injectable()
export class LoginByEmail {
  constructor(
    @inject(userTypes.allUsersRepository)
    private readonly allUsersRepository: AllUsersRepository
  ) {}

  public async run(email: string, password: string): Promise<User> {
    try {
      return await this.allUsersRepository.loginByEmailAndPassword(
        email,
        password
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      throw new UserCredentialsIncorrect();
    }
  }
}
