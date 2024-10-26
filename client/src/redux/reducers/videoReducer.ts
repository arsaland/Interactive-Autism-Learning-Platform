import { AnyAction } from 'redux';

interface Video {
    url: string;
    title: string;
}

interface VideoState {
    current: Video | null;
}

const initialState: VideoState = {
    current: null,
};

const videoReducer = (state = initialState, action: AnyAction): VideoState => {
    switch (action.type) {
        case 'FETCH_NEXT_VIDEO_SUCCESS':
            return {
                ...state,
                current: action.payload,
            };
        default:
            return state;
    }
};

export default videoReducer;
