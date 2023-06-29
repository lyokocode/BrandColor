import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        setSearch: (state, action) => {
            return action.payload;
        },
        clearSearch: (state) => {
            return '';
        },
    },
});

export const { setSearch, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;