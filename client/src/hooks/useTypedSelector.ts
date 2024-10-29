import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

/**
 * Custom hook to use the RootState type.
 */
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;