import { createSlice } from '@reduxjs/toolkit';

const downloadSlice = createSlice({
    name: 'download',
    initialState: {
        downloadUrl: null,
    },
    reducers: {
        setDownloadUrl: (state, action) => {
            state.downloadUrl = action.payload;
        },
        clearDownloadUrl: (state) => {
            state.downloadUrl = null;
        },
    },
});

export const { setDownloadUrl, clearDownloadUrl } = downloadSlice.actions;
export default downloadSlice.reducer;
