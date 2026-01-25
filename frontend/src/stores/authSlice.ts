import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState{
    user: {
        id: number;
        email: string;
        firstName?: string;
        lastName?: string;
        phoneNumber?: string;
    } | null;

    token: string | null;
    
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
            setCredentials: (state, action: PayloadAction<{ user: AuthState['user'], token: string }>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        }

    }

})



export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;