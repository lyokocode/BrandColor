import { configureStore } from '@reduxjs/toolkit';
import brandReducer from './brandSlice';
import selectionReducer from './selectionSlice';

const store = configureStore({
    reducer: {
        brands: brandReducer,
        selection: selectionReducer,

    },
});

export default store;