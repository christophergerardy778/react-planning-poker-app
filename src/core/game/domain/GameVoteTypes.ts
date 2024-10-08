export enum GameSystemVoteType {
  FIBONACCI = 'fibonacci',
  T_SHIRT = 't_shirt',
  SHORT_FIBONACCI = 'short_fibonacci',
  T_SHIRT_NUMBERS = 't_shirt_numbers',
}

export const gameVoteTypes = {
  [GameSystemVoteType.FIBONACCI]: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
  [GameSystemVoteType.SHORT_FIBONACCI]: [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100],
  [GameSystemVoteType.T_SHIRT]: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  [GameSystemVoteType.T_SHIRT_NUMBERS]: ['S', 'M', 'L', 'XL', '1', '2', '3', '4', '5'],
};
