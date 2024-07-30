import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import authSlice from '@/features/auth/authSlice';
import convoSlice from '@/features/conversations/convoSlice';
import chatbotSlice from '@/features/chatbot/chatbotSlice';

const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authSlice,
    convo: convoSlice,
    chatbot: chatbotSlice,
});

export default rootReducer;