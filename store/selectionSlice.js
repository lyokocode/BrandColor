// brandSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const brandSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {
        toggleBrandSelection: (state, action) => {
            const slug = action.payload;
            const updatedState = state.includes(slug)
                ? state.filter((item) => item !== slug)
                : [...state, slug];

            console.log(updatedState); // Güncel state'i konsola yazdırma

            return updatedState;
        },
    },
});

export const { toggleBrandSelection } = brandSlice.actions;
export default brandSlice.reducer;
