import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthSlice {
    count: number;
    authToken: string;
}

const initialState: AuthSlice = {
    count: 50,
    authToken: '',
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
    },
});

export const {
    countUp,
    setToken
} = authSlice.actions;

export default authSlice.reducer;