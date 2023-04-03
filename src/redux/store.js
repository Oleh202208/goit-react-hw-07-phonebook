import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './slice/contactsSlice';
import { filterReducer } from './slice/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
