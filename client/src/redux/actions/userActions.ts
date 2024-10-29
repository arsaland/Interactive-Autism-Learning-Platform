import { Dispatch } from 'redux';
import axios from 'axios';
import { AppThunk } from '../store';

// Action Types
export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_ERROR = 'FETCH_USER_PROFILE_ERROR';

// User Profile Interface
export interface UserProfile {
    _id: string;
    name: string;
    email: string;
    // Add other relevant fields
}

// Action Creators

// Fetch User Profile
export const fetchUserProfile = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: FETCH_USER_PROFILE });

        const response = await axios.get<UserProfile>('/api/user/profile');

        dispatch({
            type: FETCH_USER_PROFILE_SUCCESS,
            payload: response.data,
        });
    } catch (error: any) {
        dispatch({
            type: FETCH_USER_PROFILE_ERROR,
            payload: error.response?.data?.message || error.message || 'Failed to fetch user profile',
        });
    }
};
