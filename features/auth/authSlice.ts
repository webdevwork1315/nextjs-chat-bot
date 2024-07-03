import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthSlice {
    count: number;
    authToken: string;
    userId: number;
}

const initialState: AuthSlice = {
    count: 50,
    authToken: '',
    userId: 0,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        countUp: (state: { count: number }) => {
            state.count++;
        },
        setToken: (state: { authToken: string }, action: PayloadAction<string>) => {
            state.authToken = action.payload;
        },
        setUserId: (state: { userId: number }, action: PayloadAction<number>) => {
            state.userId = action.payload
        }
    },
});

export const {
    countUp,
    setToken,
    setUserId
} = authSlice.actions;

export default authSlice.reducer;