import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../types/RootState';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;