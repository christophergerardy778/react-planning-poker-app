import { createSlice } from '@reduxjs/toolkit';
import { Game } from '../../core/game/domain/Game.ts';
import { GameIssue } from '../../core/gameIssue/domain/GameIssue.ts';
import { GameVote } from '../../core/game/domain/GameVote.ts';

export type GameState = {
  game: Game | null,
  loading: boolean;
  gameIssues: GameIssue[],
  isCreatingGameIssueVisible: boolean,
  gameError: {
    visible: boolean,
    error: string,
  },
  votes: GameVote[],
}

const initialState: GameState = {
  game: null,
  loading: false,
  gameIssues: [],
  isCreatingGameIssueVisible: false,
  gameError: {
    error: '',
    visible: false,
  },
  votes: [],
};

export const gameSlice = createSlice({
  name: 'game',

  initialState,

  reducers: {
    setCurrentGame(state, action) {
      state.game = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },

    showGameError(state, action) {
      state.gameError.visible = true;
      state.gameError.error = action.payload;
    },

    clearGameError(state) {
      state.gameError.visible = false;
      state.gameError.error = '';
    },

    setGameIssues(state, action) {
      state.gameIssues = action.payload;
    },

    addGameIssue(state, action) {
      state.gameIssues.push(action.payload);
    },

    setCreatingGameIssueVisible(state, action) {
      state.isCreatingGameIssueVisible = action.payload;
    },

    updateGameIssue(state, action) {
      const index = state.gameIssues.findIndex(
        (gameIssue) => gameIssue.id === action.payload.id
      );

      state.gameIssues[index] = action.payload.gameIssue;
    },

    deleteGameIssueById(state, action) {
      state.gameIssues = state.gameIssues.filter(
        (issue) => issue.id !== action.payload
      );
    },

    selectGameIssueToCurrentGame(state, action) {
      state.game!.selectedIssueId = action.payload;
    },

    setVotes(state, action) {
      state.votes = action.payload;
    }
  },
});

export const {
  setCurrentGame,
  setLoading,
  showGameError,
  clearGameError,
  setGameIssues,
  addGameIssue,
  setCreatingGameIssueVisible,
  updateGameIssue,
  deleteGameIssueById,
  selectGameIssueToCurrentGame,
  setVotes,
} = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
