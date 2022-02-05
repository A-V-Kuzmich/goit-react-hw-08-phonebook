import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contact/contact-reduser';
import { contactApi } from './contact/contact-operation';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactApi.middleware],
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
