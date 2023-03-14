import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
    };



    const extraActions = [fetchContacts, addContact, deleteContact];
    const getActions = type => extraActions.map(action => action[type]);
    
    const contactSlice = createSlice({
        name: 'contacts',
        initialState: contactsInitialState,
        extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(
                contact => contact.id !== action.payload.id
            );
            })
            .addMatcher(isAnyOf(...getActions('pending')), state => {
            state.isLoading = true;
            })
            .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
            state.isLoading = false;
            state.error = null;
            })
            .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            });
    },
    });

export const contactsReducer = contactSlice.reducer;
