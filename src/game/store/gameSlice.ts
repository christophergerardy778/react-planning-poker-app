import { createSlice } from '@reduxjs/toolkit';
import { Game } from '../../core/game/domain/Game.ts';
import { GameIssue } from '../../core/gameIssue/domain/GameIssue.ts';

export type GameState = {
  game: Game | null,
  loading: boolean;
  gameIssues: GameIssue[],
  isCreatingGameIssueVisible: boolean,
  gameError: {
    visible: boolean,
    error: string,
  },
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
} = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
