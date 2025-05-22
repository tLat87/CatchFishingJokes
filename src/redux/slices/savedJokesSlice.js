// redux/slices/savedJokesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const savedJokesSlice = createSlice({
    name: 'savedJokes',
    initialState: [],
    reducers: {
        addJoke: (state, action) => {
            const exists = state.some(joke => joke.question === action.payload.question);
            if (!exists) {
                state.push(action.payload);
            }
        },
        removeJoke: (state, action) => {
            return state.filter(joke => joke.question !== action.payload.question);
        },
    },
});

export const { addJoke, removeJoke } = savedJokesSlice.actions;
export default savedJokesSlice.reducer;
