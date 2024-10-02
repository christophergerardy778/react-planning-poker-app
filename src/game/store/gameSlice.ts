import { createSlice } from '@reduxjs/toolkit';
import { Game } from '../../core/game/domain/Game.ts';

type State = {
  currentGame: Game | null,
}

const initialState: State = {
  currentGame: null,
};

export const gameSlice = createSlice({
  name: 'game',

  initialState,

  reducers: {
    setCurrentGame(state, action) {
      state.currentGame = action.payload;
    },
  },
});

export const { setCurrentGame } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
