import { AnyAction } from 'redux';
import {
    FETCH_ALL_VIDEOS,
    FETCH_ALL_VIDEOS_SUCCESS,
    FETCH_ALL_VIDEOS_ERROR,
    NEXT_VIDEO,
    Video
} from '../actions/videoActions';

// Video State Interface
interface VideoState {
    videos: Video[];
    currentIndex: number;
    loading: boolean;
    error: string | null;
}

// Initial State
const initialState: VideoState = {
    videos: [],
    currentIndex: 0,
    loading: false,
    error: null,
};

// Video Reducer
const videoReducer = (state = initialState, action: AnyAction): VideoState => {
    switch (action.type) {
        case FETCH_ALL_VIDEOS:
            return { ...state, loading: true, error: null };

        case FETCH_ALL_VIDEOS_SUCCESS:
            return { ...state, loading: false, videos: action.payload, currentIndex: 0 };

        case FETCH_ALL_VIDEOS_ERROR:
            return { ...state, loading: false, error: action.payload };

        case NEXT_VIDEO:
            return {
                ...state,
                currentIndex: (state.currentIndex + 1) % state.videos.length,
            };

        default:
            return state;
    }
};

export default videoReducer;
