import { AnyAction } from 'redux';

interface UserState {
    profile: any | null;
}

const initialState: UserState = {
    profile: null,
};

const userReducer = (state = initialState, action: AnyAction): UserState => {
    switch (action.type) {
        // Add cases for user-related actions
        default:
            return state;
    }
};

export default userReducer;