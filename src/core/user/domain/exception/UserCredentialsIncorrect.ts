export class UserCredentialsIncorrect extends Error {
  constructor() {
    super('user_credentials_are_incorrect');
  }
}
