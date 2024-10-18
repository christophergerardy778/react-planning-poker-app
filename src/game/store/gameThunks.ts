import { Dispatch } from '@reduxjs/toolkit';
import { container } from '../../core/container.ts';
import { gameTypes } from '../../core/game/infrastructure/di/GameTypes.ts';
import { CreateGame } from '../../core/game/app/CreateGame.ts';
import { CreateNewGame } from '../../core/game/domain/CreateNewGame.ts';
import {
  addGameIssue, deleteGameIssueById, selectGameIssueToCurrentGame,
  setCurrentGame,
  setGameIssues,
  setLoading,
  showGameError, updateGameIssue,
} from './gameSlice.ts';
import { NavigateFunction } from 'react-router-dom';
import { Game } from '../../core/game/domain/Game.ts';
import { FindGameById } from '../../core/game/app/FindGameById.ts';
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
} from '../../core/game/app/UpdateGameIssueToVote.ts';
import {
  SelectIssueIdToGame
} from '../../core/game/domain/SelectIssueIdToGame.ts';

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

export const startCreateGameIssue = (gameIssue: Omit<CreateGameIssue, 'state' | 'tags'>) => async (dispatch: Dispatch) => {
  const createGameIssue = container.get<CreateIssueGame>(
    gameIssueTypes.createIssueGame
  );

  const newGameIssue = await createGameIssue.run({
    gameId: gameIssue.gameId,
    state: 'pending',
    description: gameIssue.description,
    tags: [],
  });

  dispatch(addGameIssue(newGameIssue));
}

export const startGetAllIssuesByGameId = (gameId: Game['id']) => async (dispatch: Dispatch) => {
  const getIssuesByGameId = container.get<GetIssuesByGameId>(
    gameIssueTypes.getIssuesByGameId
  );

  const gameIssues = await getIssuesByGameId.run(gameId);

  dispatch(setGameIssues(gameIssues));
}

export const startAddTagToGameIssue = (params: { payload: CreateGameIssueTag, callback: any }) => async (dispatch: Dispatch) => {
  const addTagToIssue = container.get<AddTagToGameIssue>(gameIssueTypes.addTagToGameIssue);
  const gameIssue = await addTagToIssue.run(params.payload);
  dispatch(updateGameIssue({ id: params.payload.issueId, gameIssue }));
  params.callback();
}

export const startRemoveTagToGameIssue = (params: RemoveGameIssueTag) => async (dispatch: Dispatch) => {
  const removeTagToGameIssue = container.get<RemoveTagToGameIssue>(
    gameIssueTypes.removeTagToGameIssue
  );

  const gameIssue = await removeTagToGameIssue.run(params);

  dispatch(updateGameIssue({ id: params.issueId, gameIssue }));
}

export const startDeleteGameIssue = (gameIssueId: GameIssue['id']) => async (dispatch: Dispatch) => {
  const deleteGameIssue = container.get<DeleteGameIssue>(
    gameIssueTypes.deleteGameIssue
  );

  await deleteGameIssue.run(gameIssueId);

  dispatch(deleteGameIssueById(gameIssueId))
}

export const startSelectGameIssueToVote = (payload: SelectIssueIdToGame) => async (dispatch: Dispatch) => {
  const updateGameIssueToVote = container.get<UpdateGameIssueToVote>(
    gameTypes.updateGameIssueToVote
  );

  await updateGameIssueToVote.run(payload);

  dispatch(selectGameIssueToCurrentGame(payload.issueId));
}