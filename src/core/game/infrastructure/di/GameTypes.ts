export const gameTypes = {
  createGame: Symbol('createGame'),
  createVote: Symbol('createVote'),

  upsetGameVote: Symbol('upsetGameVote'),
  updateGameVote: Symbol('updateGameVote'),

  allGamesRepository: Symbol('allGamesRepository'),
  allGameVotesRepository: Symbol('allGameVotesRepository'),

  findGameById: Symbol('findGameById'),
  findGameVote: Symbol('findGameVote'),
  updateGameIssueToVote: Symbol('updateGameIssueToVote'),

  getAllVotesByIssueId: Symbol('getAllVotesByIssueId'),
};
