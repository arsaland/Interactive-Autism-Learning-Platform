import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface AnalyticsData {
    labels: string[];
    videoViews: number[];
    heatmap: number[][];
    xLabels: string[];
    yLabels: string[];
}

interface AnalyticsState {
    data: AnalyticsData | null;
    loading: boolean;
    error: string | null;
}

const initialState: AnalyticsState = {
    data: null,
    loading: false,
    error: null,
};

export const fetchAnalytics = createAsyncThunk<
    AnalyticsData,
    void,
    { rejectValue: string }
>(
    'analytics/fetchAnalytics',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<AnalyticsData>('/api/analytics');
            return response.data;
        } catch (err: any) {
            if (err.response && err.response.data && err.response.data.message) {
                return rejectWithValue(err.response.data.message);
            }
            return rejectWithValue('Failed to fetch analytics data');
        }
    }
);

const analyticsSlice = createSlice({
    name: 'analytics',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnalytics.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAnalytics.fulfilled, (state, action: PayloadAction<AnalyticsData>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAnalytics.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.error = action.payload || 'Unknown error occurred';
            });
    },
});

export default analyticsSlice.reducer;
