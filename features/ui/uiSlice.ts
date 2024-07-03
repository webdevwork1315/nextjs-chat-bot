import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
    count: number;
    loading: boolean;
    conversationRecordLoading: boolean;
}

const initialState: UiState = {
    count: 50,
    loading: false,
    conversationRecordLoading: false,
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
        toogleConversationRecordLoading: (state: { conversationRecordLoading: boolean }) => {
            state.conversationRecordLoading = !state.conversationRecordLoading;
        },

    }
});

export const {
    countUp,
    toogleConversationRecordLoading,
    toggleLoading
} = uiSlice.actions;

export default uiSlice.reducer;