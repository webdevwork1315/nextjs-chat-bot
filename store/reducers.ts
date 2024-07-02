import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import authSlice from '@/features/auth/authSlice';

const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authSlice,
});

export default rootReducer;