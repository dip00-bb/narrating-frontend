
import { configureStore } from '@reduxjs/toolkit'
import  toogleOpenSummarizer  from './features/summarizer/saveBlog'

export const store = configureStore({
  reducer: {
    counter: toogleOpenSummarizer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch