import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { all } from 'axios';

interface ConvoSlice {
    count: number;
    conversations: any[];
}

const initialState: ConvoSlice = {
    count: 50,
    conversations: [],
};

export const convoSlice = createSlice({
    name: 'convo',
    initialState,
    reducers: {
        countUp: (state: { count: number }) => {
            state.count++;
        },
        addAllConversationsRecords: (state: { conversations: any[] }, action: PayloadAction<any[]>) => {
            state.conversations = action.payload;
        }
    }
});

export const {
    countUp,
    addAllConversationsRecords
} = convoSlice.actions;

export default convoSlice.reducer;