import { createSlice } from '@reduxjs/toolkit';
import { Language } from '../hooks/useLanguage.ts';

export type AvailableLanguage = {
  key: string;
  lang: Language;
}

const initialState = {
  lang: 'en',
  availableLanguages: [
    { lang: 'en', key: 'english_lang' },
    { lang: 'es', key: 'spanish_lang' },
  ],
};

const appSlice = createSlice({
  name: 'app',
  initialState,

  reducers: {
    setLanguage(state, action) {
      state.lang = action.payload;
    },
  }
});

export const { setLanguage } = appSlice.actions;
export const appReducer = appSlice.reducer;