
import { configureStore } from '@reduxjs/toolkit'
import  toogleOpenSummarizer  from './features/summarizer/summarizer'
import toogleSaveBlog from './features/collection/collection'
export const store = configureStore({
  reducer: {
    summarizer: toogleOpenSummarizer,
    saveblog:toogleSaveBlog,
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch