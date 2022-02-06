// import { createSlice } from '@reduxjs/toolkit';
// import { authApi } from './auth-operation';

// const initialState = {
//   filter: '',
//   items: [],
// };

// const authSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     console.log(builder);
//     builder
//       .addMatcher(authApi.endpoints.registerNewUser.matchFulfilled, (state, { payload }) => {
//         state.user = payload.user;
//         state.token = payload.token;
//         state.isLoggedIn = true;
//       })
//       .addMatcher(authApi.endpoints.logInUser.matchFulfilled, (state, { payload }) => {
//         state.user = payload.user;
//         state.token = payload.token;
//         state.isLoggedIn = true;
//       })
//       .addMatcher(authApi.endpoints.logOutUser.matchFulfilled, (state, action) => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       });
//   },
// });

// export default authSlice.reducer;

/* 
const slice = createSlice({
  name: 'todos',
  initialState: [{ id: 1, title: 'Example todo' }],
  reducers: {
    addTodo: (state, action) => {
      console.log('before', current(state))
      state.push(action.payload)
      console.log('after', current(state))
    },
  },
})
*/
