import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: '',
    name: '',
    email: '',
    token: '',
  },

  loading: false,

  registerError: {
    visible: false,
    error: '',
  },

  loginError: {
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

    setLoading(state, action) {
      state.loading = action.payload;
    },

    showRegisterError(state, action) {
      state.registerError.visible = true;
      state.registerError.error = action.payload;
    },

    clearRegisterError(state) {
      state.registerError.visible = false;
      state.registerError.error = '';
    },

    showLoginError(state, action) {
      state.loginError.visible = true;
      state.loginError.error = action.payload;
    },

    clearLoginError(state) {
      state.loginError.visible = false;
      state.loginError.error = '';
    },

    logout(state) {
      state.user = {
        id: '',
        name: '',
        email: '',
        token: '',
      };
    }
  },
});

export const {
  setUser,
  setLoading,
  showRegisterError,
  clearRegisterError,
  showLoginError,
  clearLoginError,
  logout,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
