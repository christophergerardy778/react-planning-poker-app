export class GameNotFound extends Error {
  constructor() {
    super('game_not_found');
  }
}