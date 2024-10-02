import { Game } from '../../core/game/domain/Game.ts';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateNewGame, startFindGameById } from '../store/gameThunks.ts';
import { UnknownAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { GameState } from '../store/gameSlice.ts';

export type CreateGamePayload = Omit<Game, 'id' | 'user_id'>;

export const useGame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authSelector = useSelector((state: any) => state.auth);
  const gameSelector = useSelector<any, GameState>(state => state.game);

  const createGame = (game: CreateGamePayload) => {
    dispatch(startCreateNewGame({
      name: game.name,
      voting_system: game.voting_system,
      user_id: authSelector.user.id,
    }, navigate) as unknown as UnknownAction);
  }

  const findGameById = (gameId: Game['id']) => {
    dispatch(startFindGameById(gameId) as unknown as UnknownAction);
  }

  return {
    gameSelector,
    createGame,
    findGameById,
  }
}