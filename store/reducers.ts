import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import authSlice from '@/features/auth/authSlice';
import convoSlice from '@/features/conversations/convoSlice';

const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authSlice,
    convo: convoSlice
});

export default rootReducer;