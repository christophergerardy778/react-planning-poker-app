import { createSlice } from '@reduxjs/toolkit';
import { Game } from '../../core/game/domain/Game.ts';

export type GameState = {
  game: Game | null,
  loading: boolean;
  gameError: {
    visible: boolean,
    error: string,
  }
}

const initialState: GameState = {
  game: null,
  loading: false,
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
  },
});

export const {
  setCurrentGame,
  setLoading,
  showGameError,
  clearGameError,
} = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
