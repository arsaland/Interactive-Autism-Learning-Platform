import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the Video interface based on your backend response
interface Video {
    id: string;
    title: string;
    url: string;
    category: string;
    duration: number; // Duration in seconds
    // Add other relevant fields
}

// Define the initial state using that type
interface VideoState {
    videos: Video[];
    currentIndex: number;
    loading: boolean;
    error: string | null;
}

const initialState: VideoState = {
    videos: [],
    currentIndex: 0,
    loading: false,
    error: null,
};

// Async thunk to fetch all videos
export const fetchAllVideos = createAsyncThunk<
    Video[],
    void,
    { rejectValue: string }
>(
    'video/fetchAllVideos',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<Video[]>('/api/videos');
            return response.data;
        } catch (err: any) {
            // Handle Axios errors
            if (err.response && err.response.data) {
                return rejectWithValue(err.response.data.message || 'Failed to fetch videos');
            }
            return rejectWithValue('Failed to fetch videos');
        }
    }
);

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        // Action to go to the next video
        nextVideo: (state) => {
            if (state.currentIndex < state.videos.length - 1) {
                state.currentIndex += 1;
            } else {
                state.currentIndex = 0; // Loop back to the first video
            }
        },
        // Action to go to the previous video (optional)
        previousVideo: (state) => {
            if (state.currentIndex > 0) {
                state.currentIndex -= 1;
            } else {
                state.currentIndex = state.videos.length - 1; // Loop to the last video
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllVideos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllVideos.fulfilled, (state, action: PayloadAction<Video[]>) => {
                state.loading = false;
                state.videos = action.payload;
            })
            .addCase(fetchAllVideos.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.error = action.payload || 'Unknown error occurred';
            });
    },
});

export const { nextVideo, previousVideo } = videoSlice.actions;
export default videoSlice.reducer;
