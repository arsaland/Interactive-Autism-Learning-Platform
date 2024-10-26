import { Dispatch } from 'redux';
import { AppThunk } from '../store';

export const FETCH_NEXT_VIDEO = 'FETCH_NEXT_VIDEO';
export const FETCH_NEXT_VIDEO_SUCCESS = 'FETCH_NEXT_VIDEO_SUCCESS';

export const fetchNextVideo = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        // In a real application, you would fetch this from an API
        const mockVideo = {
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            title: 'Sample Video',
        };

        dispatch({
            type: FETCH_NEXT_VIDEO_SUCCESS,
            payload: mockVideo,
        });
    } catch (error) {
        console.error('Error fetching next video:', error);
    }
};
