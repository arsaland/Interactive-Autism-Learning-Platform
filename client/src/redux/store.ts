import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import interactionReducer from './reducers/interactionReducer';
import analyticsReducer from './reducers/analyticsReducer';
import userReducer from './reducers/userReducer';
import videoReducer from './reducers/videoReducer';

const rootReducer = combineReducers({
    interaction: interactionReducer,
    analytics: analyticsReducer,
    user: userReducer,
    video: videoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
