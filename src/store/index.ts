import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './api'

const index = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
})

export type RootState = ReturnType<typeof index.getState>
export type AppDispatch = typeof index.dispatch

export default index
