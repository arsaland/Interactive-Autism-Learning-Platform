import { AnyAction } from 'redux';
import {
    FETCH_ANALYTICS_DATA,
    FETCH_ANALYTICS_DATA_SUCCESS,
    FETCH_ANALYTICS_DATA_ERROR,
    AnalyticsData
} from '../actions/analyticsActions';

// Analytics State Interface
interface AnalyticsState {
    interactionData: AnalyticsData['interactionData'];
    categoryPreferences: AnalyticsData['categoryPreferences'];
    videoEngagement: AnalyticsData['videoEngagement'];
    loading: boolean;
    error: string | null;
}

// Initial State
const initialState: AnalyticsState = {
    interactionData: [],
    categoryPreferences: [],
    videoEngagement: [],
    loading: false,
    error: null,
};

// Analytics Reducer
const analyticsReducer = (state = initialState, action: AnyAction): AnalyticsState => {
    switch (action.type) {
        case FETCH_ANALYTICS_DATA:
            return { ...state, loading: true, error: null };

        case FETCH_ANALYTICS_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                interactionData: action.payload.interactionData,
                categoryPreferences: action.payload.categoryPreferences,
                videoEngagement: action.payload.videoEngagement,
            };

        case FETCH_ANALYTICS_DATA_ERROR:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default analyticsReducer;