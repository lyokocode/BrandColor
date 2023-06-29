import { createSlice } from '@reduxjs/toolkit';
import { brandData } from '../brandData';

const initialState = brandData;

const brandSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {},
});

export default brandSlice.reducer;