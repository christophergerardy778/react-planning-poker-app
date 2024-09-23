export class UserEmailAlreadyInUse extends Error {
  constructor() {
    super('user_email_already_exist');
  }
}