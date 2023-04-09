import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/Operations/operations';

const handlePeding = state => {
  state.isLoaging = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoaging = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoaging: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePeding)
      .addCase(fetchContacts.fulfilled, (state, actions) => {
        state.isLoaging = false;
        state.error = null;
        state.items = actions.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePeding)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoaging = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePeding)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoaging = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
