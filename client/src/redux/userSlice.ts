import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the UserProfile interface based on your backend response
interface UserProfile {
    id: string;
    name: string;
    email: string;
    // Add other relevant fields
}

// Define the initial state using that type
interface UserState {
    profile: UserProfile | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    profile: null,
    loading: false,
    error: null,
};

// Async thunk to fetch user profile
export const fetchUserProfile = createAsyncThunk<
    UserProfile,
    void,
    { rejectValue: string }
>(
    'user/fetchUserProfile',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<UserProfile>('/api/user/profile');
            return response.data;
        } catch (err: any) {
            // Handle Axios errors
            if (err.response && err.response.data) {
                return rejectWithValue(err.response.data.message || 'Failed to fetch user profile');
            }
            return rejectWithValue('Failed to fetch user profile');
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Define synchronous actions here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<UserProfile>) => {
                state.loading = false;
                state.profile = action.payload;
            })
            .addCase(fetchUserProfile.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.error = action.payload || 'Unknown error occurred';
            });
    },
});

export default userSlice.reducer;
