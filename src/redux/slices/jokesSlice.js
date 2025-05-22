// jokesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const jokesSlice = createSlice({
    name: 'jokes',
    initialState: [],
    reducers: {
        addJoke: (state, action) => {
            state.push(action.payload);
        },
        deleteJoke: (state, action) => {
            return state.filter((_, index) => index !== action.payload);
        },
    },
});

export const { addJoke, deleteJoke } = jokesSlice.actions;
export default jokesSlice.reducer;
