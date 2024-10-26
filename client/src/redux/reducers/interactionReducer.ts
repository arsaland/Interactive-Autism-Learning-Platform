import { LOG_INTERACTION } from '../actions/interactionActions';

const initialState = {
    interactions: [],
};

const interactionReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOG_INTERACTION:
            return {
                ...state,
                interactions: [...state.interactions, action.payload],
            };
        default:
            return state;
    }
};

export default interactionReducer;