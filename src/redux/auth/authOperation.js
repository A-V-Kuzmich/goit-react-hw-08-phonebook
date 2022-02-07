import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'apiService/apiContact';
import axios from 'axios';

const url = 'https://connections-api.herokuapp.com';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({
    baseUrl: url,
    refetchOnReconnect: true,
  }),

  tagTypes: ['auth'],
  endpoints: builder => ({
    registerNewUser: builder.mutation({
      query: data => ({
        url: '/users/signup',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['auth'],
    }),

    logInUser: builder.mutation({
      query: data => ({
        url: '/users/login',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['auth'],
    }),

    logOutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['auth'],
    }),

    currentUser: builder.query({
      async queryFn(arg, { getState }, extraOptions, baseQuery) {
        const state = getState().auth.token;
        if (!state) {
          return { error: { status: '401', data: 'Please authenticate' } };
        }
        axios.defaults.headers.common.Authorization = `Bearer ${state}`;
        try {
          const result = await baseQuery({ url: '/users/current', metod: 'GET' });
          return { data: result };
        } catch (axiosError) {
          const err = axiosError;
          return { error: { status: err.response?.status, data: err.response?.data } };
        }
      },
      invalidatesTags: ['auth'],
    }),
  }),
});

export const {
  useRegisterNewUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useCurrentUserQuery,
} = authApi;
