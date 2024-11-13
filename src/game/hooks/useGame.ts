import { Game } from '../../core/game/domain/Game.ts';
import { useDispatch, useSelector } from 'react-redux';
import {
  startAddTagToGameIssue,
  startCreateGameIssue,
  startCreateNewGame,
  startDeleteGameIssue, startFetchGameVotesByIssueId,
  startFindGameById,
  startGetAllIssuesByGameId,
  startRemoveTagToGameIssue,
  startSelectGameIssueToVote, startUpsertGameVote,
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
import {
  SelectIssueIdToGame
} from '../../core/game/domain/SelectIssueIdToGame.ts';
import { CreateGameVote } from '../../core/game/domain/CreateGameVote.ts';
import { useEffect, useState } from 'react';

export type CreateGamePayload = Omit<Game, 'id' | 'user_id'>;

export const useGame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authSelector = useSelector((state: any) => state.auth);
  const gameSelector = useSelector<any, GameState>(state => state.game);

  const [isGameOwner, setIsGameOwner] = useState(false);

  useEffect(() => {
    if (authSelector.user) {
      setIsGameOwner(gameSelector.game?.user_id === authSelector.user.id)
    }
  }, [gameSelector.game, authSelector.user])

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
    dispatch(startAddTagToGameIssue(gameSelector.game!.id, params) as any);
  }

  const removeTagToIssue = (params: RemoveGameIssueTag) => {
    dispatch(startRemoveTagToGameIssue(gameSelector.game!.id, params) as any);
  }

  const deleteGameIssue = (gameIssueId: GameIssue['id']) => {
    dispatch(startDeleteGameIssue(gameSelector.game!.id, gameIssueId) as any);
  }

  const selectIssueToVoteInGame = (payload: SelectIssueIdToGame) => {
    dispatch(startSelectGameIssueToVote(payload) as any);
  }

  const voteForIssue = (payload: CreateGameVote) => {
    dispatch(startUpsertGameVote(payload) as any);
  }

  const getAllIssueVotes = (issueId: string) => {
    dispatch(startFetchGameVotesByIssueId(issueId) as any);
  }

  return {
    gameSelector,
    isGameOwner,
    createGame,
    findGameById,
    createGameIssue,
    getGameIssuesByGameId,
    toggleGameIssueForm,
    addTagToIssue,
    deleteGameIssue,
    removeTagToIssue,
    selectIssueToVoteInGame,
    voteForIssue,
    getAllIssueVotes,
  }
}