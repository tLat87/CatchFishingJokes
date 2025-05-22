// redux/savedQuestionsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const savedQuestionsSlice = createSlice({
    name: 'savedQuestions',
    initialState: [],
    reducers: {
        saveQuestion: (state, action) => {
            const exists = state.find(q => q.question === action.payload.question);
            if (!exists) {
                state.push(action.payload);
            }
        },
        removeQuestion: (state, action) => {
            return state.filter(q => q.question !== action.payload.question);
        },
        clearSaved: () => []
    }
});

export const { saveQuestion, removeQuestion, clearSaved } = savedQuestionsSlice.actions;
export default savedQuestionsSlice.reducer;
