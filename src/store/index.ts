


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { gitHubApi } from "./gitHub-slice-api/gitHub.api";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { githubReducer } from "./gitHub-slice-api/gitHub.slice";
import clockReducer from './slices/clockSlice'
import postReducer from './slices/postSlice'

const rootReducer = combineReducers({
  [gitHubApi.reducerPath]: gitHubApi.reducer,
  github: githubReducer,
  clock: clockReducer,
  post: postReducer,
});

const store = configureStore({
    
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gitHubApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']

export default store
