import { configureStore } from '@reduxjs/toolkit';
import brandReducer from './brandSlice';
import selectionReducer from './selectionSlice';
import copiedReducer from "./copiedSlice"
import searchReducer from "./searchSlice"


const store = configureStore({
    reducer: {
        brands: brandReducer,
        selection: selectionReducer,
        copied: copiedReducer,
        search: searchReducer

    },
});

export default store;