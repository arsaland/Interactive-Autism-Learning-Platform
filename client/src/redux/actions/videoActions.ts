import { AppThunk } from '../store';
import axios from 'axios';

// Action Types
export const FETCH_ALL_VIDEOS = 'FETCH_ALL_VIDEOS';
export const FETCH_ALL_VIDEOS_SUCCESS = 'FETCH_ALL_VIDEOS_SUCCESS';
export const FETCH_ALL_VIDEOS_ERROR = 'FETCH_ALL_VIDEOS_ERROR';
export const NEXT_VIDEO = 'NEXT_VIDEO';

// Video Interface
export interface Video {
    _id: string;
    title: string;
    url: string;
    category: string;
    duration: number;
}

export const fetchAllVideos = (): AppThunk => async (dispatch) => {
    try {
        dispatch({ type: FETCH_ALL_VIDEOS });

        const response = await axios.get<Video[]>('/api/videos');

        dispatch({
            type: FETCH_ALL_VIDEOS_SUCCESS,
            payload: response.data,
        });
    } catch (error: any) {
        dispatch({
            type: FETCH_ALL_VIDEOS_ERROR,
            payload: error.response?.data?.message || error.message || 'Failed to fetch videos',
        });
    }
};

export const nextVideo = (): { type: typeof NEXT_VIDEO } => ({
    type: NEXT_VIDEO,
});
