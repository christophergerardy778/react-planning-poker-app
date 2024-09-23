import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: '',
    name: '',
    email: '',
    token: '',
  },

  registerError: {
    visible: false,
    error: '',
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },

    showRegisterError(state, action) {
      state.registerError.visible = true;
      state.registerError.error = action.payload;
    },

    clearRegisterError(state) {
      state.registerError.visible = false;
      state.registerError.error = '';
    }
  },
});

export const { setUser, showRegisterError, clearRegisterError } = authSlice.actions;
export const authReducer = authSlice.reducer;
