import { FETCH_ANALYTICS } from '../actions/analyticsActions';

const initialState = {
    interactionData: [],
    categoryPreferences: [],
    videoEngagement: [],
};

const analyticsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_ANALYTICS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default analyticsReducer;