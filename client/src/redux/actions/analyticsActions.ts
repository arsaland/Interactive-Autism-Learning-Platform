import { Dispatch } from 'redux';
import { api } from '../../utils/api';

export const FETCH_ANALYTICS = 'FETCH_ANALYTICS';

export const fetchAnalytics = () => async (dispatch: Dispatch) => {
    try {
        const response = await api.get('/analytics');
        dispatch({
            type: FETCH_ANALYTICS,
            payload: response.data,
        });
    } catch (error) {
        console.error('Error fetching analytics:', error);
    }
};