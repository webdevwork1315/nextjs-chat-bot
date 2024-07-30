import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatbotSlice {
    chatbotMessages: any;
    conversation_id: number;
}

const initialState: ChatbotSlice = {
    chatbotMessages: [],
    conversation_id: 0,
};

export const chatbotSlice = createSlice({
    name: 'chatbot',
    initialState,
    reducers: {
        setChatbotMessages: (state, action: PayloadAction<any>) => {
            state.chatbotMessages = action.payload;
        },

        setConversationId: (state, action: PayloadAction<number>) => {
            state.conversation_id = action.payload;
        },
    }
});

export const {
    setChatbotMessages,
    setConversationId
} = chatbotSlice.actions;

export default chatbotSlice.reducer;