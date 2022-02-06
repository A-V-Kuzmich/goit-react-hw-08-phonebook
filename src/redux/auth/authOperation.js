import { createApi /* fetchBaseQuery */ } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'apiService/apiContact';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
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
  }),
});

export const { useRegisterNewUserMutation, useLogInUserMutation, useLogOutUserMutation } = authApi;

// getContacts: builder.query({
//   query: () => `/contacts`,
//   providesTags: ['contact'],
// }),

// deleteContact: builder.mutation({
//   query: contactId => ({
//     url: `/contacts/${contactId}`,
//     method: 'DELETE',
//   }),
//   invalidatesTags: ['contact'],
// }),

// transformResponse: (response, meta, arg) => {
//   console.log(response, arg);
//   // console.log(meta);
//   // console.log(arg);
// },