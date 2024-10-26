import { Dispatch } from 'redux';

export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';

export const fetchUserProfile = () => async (dispatch: Dispatch) => {
    // Implement fetching user profile
    dispatch({ type: FETCH_USER_PROFILE, payload: {} });
};
