// src/store/authSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./services/api.services";


interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
};

// Async thunk för login
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (
        credentials: { email: string; password: string },
        { rejectWithValue }
    ) => {
        try {
            const response = await api.loginUser(
                credentials.email,
                credentials.password
            );
            localStorage.setItem("token", response.token);
            return response;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Login failed";
            return rejectWithValue(errorMessage);
        }
    }
);

// Async thunk för logout
export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            await api.logoutUser();
            localStorage.removeItem("token");
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Logout failed";
            return rejectWithValue(errorMessage);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        // Manuell logout utan API call
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            // Login cases
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // Logout cases
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.token = null;
                state.error = null;
            });
    },
});

export const { clearError, logout } = authSlice.actions;
export default authSlice.reducer;