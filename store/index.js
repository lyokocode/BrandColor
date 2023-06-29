// store.js
import { configureStore } from '@reduxjs/toolkit';
import brandReducer from './brandSlice';

const store = configureStore({
    reducer: {
        brands: brandReducer,
    },
});

export default store;