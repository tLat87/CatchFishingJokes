import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import jokesReducer from './slices/jokesSlice';
import savedQuestionsReducer from './slices/savedQuestionsSlice';
import savedJokesReducer from './slices/savedJokesSlice';

const rootReducer = combineReducers({
  jokes: jokesReducer,
  savedQuestions: savedQuestionsReducer,
  savedJokes: savedJokesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
