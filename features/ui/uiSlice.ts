import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
    count: number;
    conversationRecordPopup: boolean;
    conversationRecordLoading: boolean;
}

const initialState: UiState = {
    count: 50,
    conversationRecordLoading: false,
    conversationRecordPopup: false
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        countUp: (state: { count: number }) => {
            state.count++;
        },
        toogleConversationRecordPopup: (state: { conversationRecordPopup: boolean }) => {
            state.conversationRecordPopup = !state.conversationRecordPopup;
        },
        toogleConversationRecordLoading: (state: { conversationRecordLoading: boolean }) => {
            state.conversationRecordLoading = !state.conversationRecordLoading;
        }
    }
});

export const {
    countUp,
    toogleConversationRecordPopup,
    toogleConversationRecordLoading
} = uiSlice.actions;

export default uiSlice.reducer;