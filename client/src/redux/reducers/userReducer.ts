import { AnyAction } from 'redux';
import {
    FETCH_USER_PROFILE,
    FETCH_USER_PROFILE_SUCCESS,
    FETCH_USER_PROFILE_ERROR,
    UserProfile
} from '../actions/userActions';

// User State Interface
interface UserState {
    profile: UserProfile | null;
    loading: boolean;
    error: string | null;
}

// Initial State
const initialState: UserState = {
    profile: null,
    loading: false,
    error: null,
};

// User Reducer
const userReducer = (state = initialState, action: AnyAction): UserState => {
    switch (action.type) {
        case FETCH_USER_PROFILE:
            return { ...state, loading: true, error: null };

        case FETCH_USER_PROFILE_SUCCESS:
            return { ...state, loading: false, profile: action.payload };

        case FETCH_USER_PROFILE_ERROR:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default userReducer;