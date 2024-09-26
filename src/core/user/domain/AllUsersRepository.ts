import { UserWithEmail } from './UserWithEmail.ts';
import { User } from './User.ts';

export interface AllUsersRepository {
  createUserByEmail(user: UserWithEmail): Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;
  loginByEmailAndPassword(email: string, password: string): Promise<User>;
}
