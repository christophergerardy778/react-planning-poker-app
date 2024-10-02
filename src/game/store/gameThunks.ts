import { Dispatch } from '@reduxjs/toolkit';
import { container } from '../../core/container.ts';
import { gameTypes } from '../../core/game/infrastructure/di/GameTypes.ts';
import { CreateGame } from '../../core/game/app/CreateGame.ts';
import { CreateNewGame } from '../../core/game/domain/CreateNewGame.ts';
import { setCurrentGame } from './gameSlice.ts';

export const startCreateNewGame = (game: CreateNewGame) => async (dispatch: Dispatch) => {
  const createGame = container.get<CreateGame>(gameTypes.createGame);
  const newGame = await createGame.run(game);
  dispatch(setCurrentGame(newGame));
};
