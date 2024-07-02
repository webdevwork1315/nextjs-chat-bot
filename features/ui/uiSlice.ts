import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
    count: number;
    conversationRecordPopup: boolean;
}

const initialState: UiState = {
    count: 50,
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
        }
    }
});

export const {
    countUp,
    toogleConversationRecordPopup
} = uiSlice.actions;

export default uiSlice.reducer;