import { combineReducers, configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import { authReducer } from '../auth/store/authSlice.ts';
import { appReducer } from './store/AppSlice.ts';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'app'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);