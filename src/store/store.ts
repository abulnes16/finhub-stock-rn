import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { AuthenticationReducer, AlertReducer, StockReducer } from "./slices"


const reducer = combineReducers({
  authentication: AuthenticationReducer,
  alerts: AlertReducer,
  stocks: StockReducer,
})

export const store = configureStore({
  reducer,
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch