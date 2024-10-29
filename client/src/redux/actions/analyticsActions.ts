import { AppThunk } from '../store';
import axios from 'axios';

// Action Types
export const FETCH_ANALYTICS_DATA = 'FETCH_ANALYTICS_DATA';
export const FETCH_ANALYTICS_DATA_SUCCESS = 'FETCH_ANALYTICS_DATA_SUCCESS';
export const FETCH_ANALYTICS_DATA_ERROR = 'FETCH_ANALYTICS_DATA_ERROR';

// Analytics Data Interfaces
export interface Interaction {
    userId: string;
    actions: number;
    // Add other relevant fields
}

export interface CategoryPreference {
    category: string;
    preferenceScore: number;
}

export interface VideoEngagement {
    videoId: string;
    averageWatchTime: number;
    engagementRate: number;
}

export interface AnalyticsData {
    interactionData: Interaction[];
    categoryPreferences: CategoryPreference[];
    videoEngagement: VideoEngagement[];
}

// Fetch Analytics Data
export const fetchAnalyticsData = (): AppThunk => async (dispatch) => {
    try {
        dispatch({ type: FETCH_ANALYTICS_DATA });

        const response = await axios.get<AnalyticsData>('/api/analytics');

        dispatch({
            type: FETCH_ANALYTICS_DATA_SUCCESS,
            payload: response.data,
        });
    } catch (error: any) {
        dispatch({
            type: FETCH_ANALYTICS_DATA_ERROR,
            payload: error.response?.data?.message || error.message || 'Failed to fetch analytics data',
        });
    }
};