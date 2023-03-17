import { configureStore, combineReducers, getDefaultMiddleware} from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactSlice";
import { filterReducer } from "./contacts/filterSlice";
import { authReducer } from "./auth/authSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,  
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistReducer(authPersistConfig, authReducer), 
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const persistor = persistStore(store);