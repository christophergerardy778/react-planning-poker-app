import { Game } from '../../core/game/domain/Game.ts';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateNewGame } from '../store/gameThunks.ts';
import { UnknownAction } from '@reduxjs/toolkit';

export type CreateGamePayload = Omit<Game, 'id' | 'user_id'>;

export const useGame = () => {
  const dispatch = useDispatch();
  const authSelector = useSelector((state: any) => state.auth);

  const createGame = (game: CreateGamePayload) => {
    dispatch(startCreateNewGame({
      name: game.name,
      voting_system: game.voting_system,
      user_id: authSelector.user.id,
    }) as unknown as UnknownAction);
  }

  return {
    createGame,
  }
}