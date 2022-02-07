import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contact/contact-reduser';
// import { authApi } from './auth/authOperation';
import authSlice from './auth/authSlice';
import { contactApi } from './contact/contact-operation';

const authPersistconfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const reduserContacts = combineReducers({
//   contactsReducer,
//   [contactApi.reducerPath]: contactApi.reducer,
// });

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistconfig, authSlice),
    [contactApi.reducerPath]: contactApi.reducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
    contactApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
