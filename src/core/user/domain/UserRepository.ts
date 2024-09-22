export interface UserRepository {
  createUserByEmail(): Promise<void>;
}