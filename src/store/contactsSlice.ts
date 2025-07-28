import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../types';

const initialState: Contact[] = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const idx = state.findIndex(c => c.id === action.payload.id);
      if (idx !== -1) state[idx] = action.payload;
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      return state.filter(c => c.id !== action.payload);
    },
    setContacts: (_, action: PayloadAction<Contact[]>) => action.payload
  }
});

export const { addContact, updateContact, deleteContact, setContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
