import { createApi /* fetchBaseQuery */ } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'apiService/apiContact';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),

  tagTypes: ['auth'],
  endpoints: builder => ({
    // getContacts: builder.query({
    //   query: () => `/contacts`,
    //   providesTags: ['contact'],
    // }),

    registerNewUser: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        data: newUser,
      }),
      // transformResponse: (response, meta, arg) => {
      //   console.log(response, arg);
      //   // console.log(meta);
      //   // console.log(arg);
      // },
      invalidatesTags: [{ type: 'auth' }],
    }),

    // deleteContact: builder.mutation({
    //   query: contactId => ({
    //     url: `/contacts/${contactId}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['contact'],
    // }),
  }),
});

export const { useRegisterNewUserMutation } = authApi;
