import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const selectionSlice = createSlice({
    name: 'selection',
    initialState,
    reducers: {
        toggleBrandSelection: (state, action) => {
            const slug = action.payload;
            const updatedState = state.includes(slug)
                ? state.filter((item) => item !== slug)
                : [...state, slug];

            return updatedState;
        },
        clearSelectedBrands: () => {
            return [];
        },
    },
});

export const { toggleBrandSelection, clearSelectedBrands } = selectionSlice.actions;
export default selectionSlice.reducer;
