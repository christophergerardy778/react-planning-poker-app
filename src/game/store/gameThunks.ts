import { Dispatch } from '@reduxjs/toolkit';
import { container } from '../../core/container.ts';
import { gameTypes } from '../../core/game/infrastructure/di/GameTypes.ts';
import { CreateGame } from '../../core/game/app/create/CreateGame.ts';
import { CreateNewGame } from '../../core/game/domain/CreateNewGame.ts';
import {
  setCurrentGame,
  setGameIssues,
  setLoading, setVotes,
  showGameError,
} from './gameSlice.ts';
import { NavigateFunction } from 'react-router-dom';
import { Game } from '../../core/game/domain/Game.ts';
import { FindGameById } from '../../core/game/app/find/FindGameById.ts';
import {
  CreateGameIssue
} from '../../core/gameIssue/domain/CreateGameIssue.ts';
import {
  gameIssueTypes
} from '../../core/gameIssue/infrastructure/di/GameIssueTypes.ts';
import { CreateIssueGame } from '../../core/gameIssue/app/CreateIssueGame.ts';
import {
  GetIssuesByGameId
} from '../../core/gameIssue/app/GetIssuesByGameId.ts';
import {
  CreateGameIssueTag
} from '../../core/gameIssue/domain/CreateGameIssueTag.ts';
import {
  AddTagToGameIssue
} from '../../core/gameIssue/app/AddTagToGameIssue.ts';
import {
  RemoveGameIssueTag
} from '../../core/gameIssue/domain/RemoveGameIssueTag.ts';
import {
  RemoveTagToGameIssue
} from '../../core/gameIssue/app/RemoveTagToGameIssue.ts';
import { GameIssue } from '../../core/gameIssue/domain/GameIssue.ts';
import { DeleteGameIssue } from '../../core/gameIssue/app/DeleteGameIssue.ts';
import {
  UpdateGameIssueToVote
} from '../../core/game/app/update/UpdateGameIssueToVote.ts';
import {
  SelectIssueIdToGame
} from '../../core/game/domain/SelectIssueIdToGame.ts';
import type { CreateGameVote } from '../../core/game/domain/CreateGameVote.ts';
import { UpsetGameVote } from '../../core/game/app/update/UpsetGameVote.ts';
import {
  GetAllVotesByIssueId
} from '../../core/game/app/get/GetAllVotesByIssueId.ts';
import { socket } from '../hooks/useSocket.ts';

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

export const startCreateGameIssue = (gameIssue: Omit<CreateGameIssue, 'state' | 'tags'>) => async () => {
  const createGameIssue = container.get<CreateIssueGame>(
    gameIssueTypes.createIssueGame
  );

  await createGameIssue.run({
    gameId: gameIssue.gameId,
    state: 'pending',
    description: gameIssue.description,
    tags: [],
  });

  socket.emit("game-action", { roomId: gameIssue.gameId })
}

export const startGetAllIssuesByGameId = (gameId: Game['id']) => async (dispatch: Dispatch) => {
  const getIssuesByGameId = container.get<GetIssuesByGameId>(
    gameIssueTypes.getIssuesByGameId
  );

  const gameIssues = await getIssuesByGameId.run(gameId);

  dispatch(setGameIssues(gameIssues));
}

export const startAddTagToGameIssue = (gameId: Game['id'], params: { payload: CreateGameIssueTag, callback: any }) => async () => {
  const addTagToIssue = container.get<AddTagToGameIssue>(gameIssueTypes.addTagToGameIssue);
  await addTagToIssue.run(params.payload);
  // dispatch(updateGameIssue({ id: params.payload.issueId, gameIssue }));
  socket.emit("game-action", { roomId: gameId });
  params.callback();
}

export const startRemoveTagToGameIssue = (gameId: Game['id'], params: RemoveGameIssueTag) => async () => {
  const removeTagToGameIssue = container.get<RemoveTagToGameIssue>(
    gameIssueTypes.removeTagToGameIssue
  );

  await removeTagToGameIssue.run(params);

  socket.emit("game-action", { roomId: gameId })
  // dispatch(updateGameIssue({ id: params.issueId, gameIssue }));
}

export const startDeleteGameIssue = (gameId: Game['id'], gameIssueId: GameIssue['id']) => async () => {
  const deleteGameIssue = container.get<DeleteGameIssue>(
    gameIssueTypes.deleteGameIssue
  );

  await deleteGameIssue.run(gameIssueId);

  socket.emit("game-action", { roomId: gameId });
}

export const startSelectGameIssueToVote = (payload: SelectIssueIdToGame) => async () => {
  const updateGameIssueToVote = container.get<UpdateGameIssueToVote>(
    gameTypes.updateGameIssueToVote
  );

  await updateGameIssueToVote.run(payload);

  socket.emit("game-action", { roomId: payload.gameId });
  // dispatch(selectGameIssueToCurrentGame(payload.issueId));
}

export const startUpsertGameVote = (payload: CreateGameVote) => async () => {
  const upsertGameVote = container.get<UpsetGameVote>(gameTypes.upsetGameVote);
  await upsertGameVote.run(payload);
  socket.emit("game-action");
}

export const startFetchGameVotesByIssueId = (gameIssueId: string) => async (dispatch: Dispatch) => {
  const fetchGameVotesByIssueId = container.get<GetAllVotesByIssueId>(
    gameTypes.getAllVotesByIssueId
  );

  const votes = await fetchGameVotesByIssueId.run(gameIssueId);
  dispatch(setVotes(votes));
}