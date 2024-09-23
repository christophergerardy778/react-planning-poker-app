import { inject, injectable } from 'inversify';
import { User } from '../domain/User.ts';
import { userTypes } from '../infrastructure/di/UserTypes.ts';
import { type AllUsersRepository } from '../domain/AllUsersRepository.ts';

@injectable()
export class FindUserByEmail {
  constructor(
    @inject(userTypes.allUsersRepository)
    private readonly allUsersRepository: AllUsersRepository
  ) {}

  public async run(email: string): Promise<User | null> {
    return this.allUsersRepository.findUserByEmail(email);
  }
}
