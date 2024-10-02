import { Dispatch } from '@reduxjs/toolkit';
import { container } from '../../core/container.ts';
import { gameTypes } from '../../core/game/infrastructure/di/GameTypes.ts';
import { CreateGame } from '../../core/game/app/CreateGame.ts';
import { CreateNewGame } from '../../core/game/domain/CreateNewGame.ts';
import { setCurrentGame, setLoading, showGameError } from './gameSlice.ts';
import { NavigateFunction } from 'react-router-dom';
import { Game } from '../../core/game/domain/Game.ts';
import { FindGameById } from '../../core/game/app/FindGameById.ts';

export const startCreateNewGame = (game: CreateNewGame, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
  const createGame = container.get<CreateGame>(gameTypes.createGame);

  dispatch(setLoading(true));

  const newGame = await createGame.run(game);

  dispatch(setCurrentGame(newGame));
  dispatch(setLoading(false));

  navigate(`/game/${newGame.id}`);
};

export const startFindGameById = (gameId: Game['id']) => async (dispatch: Dispatch) => {
  try {
    const findGameById = container.get<FindGameById>(
      gameTypes.findGameById
    );

    dispatch(setLoading(true));

    const game = await findGameById.run(gameId);

    dispatch(setCurrentGame(game));
  } catch (e: any) {
    dispatch(showGameError(e.message));
  } finally {
    dispatch(setLoading(false))
  }
}
