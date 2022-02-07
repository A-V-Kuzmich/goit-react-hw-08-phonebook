import { createApi /* fetchBaseQuery */ } from '@reduxjs/toolkit/query/react';
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
        axios.defaults.headers.common.Authorization = `Bearer ${state}`;
        try {
          const result = await baseQuery({ url: '/users/current', metod: 'GET' });
          console.log(result);
          return { data: result };
        } catch (axiosError) {
          const err = axiosError;
          return { error: { status: err.response?.status, data: err.response?.data } };
        }
      },
    }),
  }),
});

export const {
  useRegisterNewUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useCurrentUserQuery,
} = authApi;

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

/* 
{error: {…}}
error:{
  data:{
    message: "Please authenticate"
  }
  status: 401
}

{
  data:{
email: "77dfhtdrth7@mail.com"
name: "tgfybjhtfhytf"}
}
*/
