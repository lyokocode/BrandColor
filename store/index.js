import { configureStore } from '@reduxjs/toolkit';
import brandReducer from './brandSlice';
import selectionReducer from './selectionSlice';
import copiedReducer from "./copiedSlice"

const store = configureStore({
    reducer: {
        brands: brandReducer,
        selection: selectionReducer,
        copied: copiedReducer

    },
});

export default store;