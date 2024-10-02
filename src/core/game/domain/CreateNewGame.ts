import { Game } from './Game.ts';

export type CreateNewGame = Omit<Game, 'id'>;