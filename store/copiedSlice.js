import { createSlice } from '@reduxjs/toolkit';

const copiedSlice = createSlice({
    name: 'copied',
    initialState: false,
    reducers: {
        setCopied: (state, action) => {
            return action.payload;
        },
        clearCopied: (state) => {
            return false;
        },
    },
});

export const { setCopied, clearCopied } = copiedSlice.actions;
export default copiedSlice.reducer;
