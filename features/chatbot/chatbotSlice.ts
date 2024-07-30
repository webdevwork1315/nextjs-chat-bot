import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatbotSlice {
    chatbotMessages: any;
}

const initialState: ChatbotSlice = {
    chatbotMessages: []
};

export const chatbotSlice = createSlice({
    name: 'chatbot',
    initialState,
    reducers: {
        setChatbotMessages: (state, action: PayloadAction<any>) => {
            state.chatbotMessages = action.payload;
        },
    }
});

export const {
    setChatbotMessages,
} = chatbotSlice.actions;

export default chatbotSlice.reducer;