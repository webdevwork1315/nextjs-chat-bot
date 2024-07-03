import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
    count: number;
    loading: boolean;
    reFetchData: boolean;
}

const initialState: UiState = {
    count: 50,
    loading: false,
    reFetchData: false,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        countUp: (state: { count: number }) => {
            state.count++;
        },
        toggleLoading: (state: { loading: boolean }) => {
            state.loading = !state.loading;
        },
        toggleReFetchData: (state: { reFetchData: boolean }) => {
            state.reFetchData = !state.reFetchData;
        },
    }
});

export const {
    countUp,
    toggleLoading,
    toggleReFetchData
} = uiSlice.actions;

export default uiSlice.reducer;