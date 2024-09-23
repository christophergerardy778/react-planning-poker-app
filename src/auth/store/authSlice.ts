import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: '',
    name: '',
    email: '',
    token: '',
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
  },
});

export const { setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
