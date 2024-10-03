export enum GameSystemVoteType {
  FIBONACCI = 'fibonacci',
  T_SHIRT = 't_shirt',
  SHORT_FIBONACCI = 'short_fibonacci',
  T_SHIRT_NUMBERS = 't_shirt_numbers',
}

export const gameVoteTypes = {
  [GameSystemVoteType.FIBONACCI]: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
  [GameSystemVoteType.T_SHIRT]: [],
  [GameSystemVoteType.SHORT_FIBONACCI]: [],
  [GameSystemVoteType.T_SHIRT_NUMBERS]: [],
};
