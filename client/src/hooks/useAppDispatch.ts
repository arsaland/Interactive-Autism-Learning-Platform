import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';

/**
 * Custom hook to use the AppDispatch type.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();