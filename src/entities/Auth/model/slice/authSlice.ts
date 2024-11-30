import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Auth } from '../types/auth.ts';
import {registerUser, userLogin} from "../selectors/authActions/authActions.ts";
import {User} from "../../../User";

export const initialState: Auth = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(registerUser.fulfilled, (state) => {
            state.loading = false
            state.success = true
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || "Registration failed";
        });
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(userLogin.fulfilled, (state, action: PayloadAction<User>) => {
            state.loading = false
            state.success = true
            state.userInfo = action.payload
            state.userToken = action.payload.userToken!

        });
        builder.addCase(userLogin.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || "Registration failed";
        });
    }
})

export const { reducer: authReducer } = authSlice;