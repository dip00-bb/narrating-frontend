
import { configureStore } from '@reduxjs/toolkit'
import toogleOpenSummarizer from './features/summarizer/summarizer'
import toogleSaveBlog from './features/collection/collection'
import { privateAuthApiSlice } from './features/authenticationSlices/private/privateApiSlice'
import { publicAuthApiSlice } from './features/authenticationSlices/public/publicApiSlice'
export const store = configureStore({
  reducer: {
    summarizer: toogleOpenSummarizer,
    saveblog: toogleSaveBlog,
    [privateAuthApiSlice.reducerPath]: privateAuthApiSlice.reducer,
    [publicAuthApiSlice.reducerPath]: publicAuthApiSlice.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(
      privateAuthApiSlice.middleware,
      publicAuthApiSlice.middleware
    )

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch