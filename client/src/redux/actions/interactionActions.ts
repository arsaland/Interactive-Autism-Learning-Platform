import { AppThunk } from '../store';

export const LOG_INTERACTION = 'LOG_INTERACTION';

interface InteractionData {
    type: string;
    timestamp: number;
}

export const logInteraction = (data: InteractionData): AppThunk => async (dispatch) => {
    try {
        // Here you would typically make an API call to log the interaction
        // For now, we'll just dispatch an action
        dispatch({
            type: LOG_INTERACTION,
            payload: data,
        });
    } catch (error) {
        console.error('Error logging interaction:', error);
    }
};
