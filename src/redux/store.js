import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contact/contact-reduser';
import { authApi } from './auth/authOperation';
import authSlice from './auth/authSlice';
// import {persistStore} from 'redux-pers'
import { contactApi } from './contact/contact-operation';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const store = configureStore({
  reducer: {
    // Slice: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    contacts: contactsReducer,
    auth: authSlice,
  },
  middleware: gDM => [...gDM(), contactApi.middleware],
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
setupListeners(store.dispatch);
