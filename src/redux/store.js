import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contact/contact-reduser';
// import { contactApi } from './contact/contact-operation';
import { authApi } from './auth/auth-operation';
import authSlice from './auth/authSlice';
// import {persistStore} from 'redux-pers'

const store = configureStore({
  reducer: {
    // Slice: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    contacts: contactsReducer,
    auth: authSlice,
  },
  middleware: gDM => [...gDM(), authApi.middleware],
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
