import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginRequest, LoginResponse, RegisterRequest } from '../types/User.ts'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api' }),
  endpoints: (build) => ({
    registerUser: build.mutation<any, RegisterRequest>({
      query: (user) => ({
        url: '/auth/local/register',
        method: 'POST',
        body: user,
      }),
    }),
    loginUser: build.mutation<LoginResponse, LoginRequest>({
      query: (user) => ({
        url: '/auth/local',
        method: 'POST',
        body: user,
      }),
    }),
  }),
})
