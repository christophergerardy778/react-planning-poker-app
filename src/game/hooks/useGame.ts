import { Game } from '../../core/game/domain/Game.ts';
import { useDispatch, useSelector } from 'react-redux';
import {
  startAddTagToGameIssue,
  startCreateGameIssue,
  startCreateNewGame, startDeleteGameIssue,
  startFindGameById,
  startGetAllIssuesByGameId, startRemoveTagToGameIssue,
} from '../store/gameThunks.ts';
import { UnknownAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import {
  GameState,
  setCreatingGameIssueVisible,
} from '../store/gameSlice.ts';
import {
  CreateGameIssue
} from '../../core/gameIssue/domain/CreateGameIssue.ts';
import {
  CreateGameIssueTag
} from '../../core/gameIssue/domain/CreateGameIssueTag.ts';
import {
  RemoveGameIssueTag
} from '../../core/gameIssue/domain/RemoveGameIssueTag.ts';
import { GameIssue } from '../../core/gameIssue/domain/GameIssue.ts';

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

  const createGameIssue = (gameIssue: Omit<CreateGameIssue, 'state' | 'tags'>) => {
    dispatch(startCreateGameIssue(gameIssue) as unknown as UnknownAction);
  }

  const findGameById = (gameId: Game['id']) => {
    dispatch(startFindGameById(gameId) as unknown as UnknownAction);
  }

  const getGameIssuesByGameId = (gameId: Game['id']) => {
    dispatch(startGetAllIssuesByGameId(gameId) as unknown as UnknownAction);
  }

  const toggleGameIssueForm = (value: boolean) => {
    dispatch(setCreatingGameIssueVisible(value));
  }

  const addTagToIssue = (params: { payload: CreateGameIssueTag, callback: any }) => {
    dispatch(startAddTagToGameIssue(params) as any);
  }

  const removeTagToIssue = (params: RemoveGameIssueTag) => {
    dispatch(startRemoveTagToGameIssue(params) as any);
  }

  const deleteGameIssue = (gameIssueId: GameIssue['id']) => {
    dispatch(startDeleteGameIssue(gameIssueId) as any);
  }

  return {
    gameSelector,
    createGame,
    findGameById,
    createGameIssue,
    getGameIssuesByGameId,
    toggleGameIssueForm,
    addTagToIssue,
    deleteGameIssue,
    removeTagToIssue,
  }
}