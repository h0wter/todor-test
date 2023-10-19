import { type TypedUseSelectorHook, useSelector } from 'react-redux';

import { type RootState } from '../../../packages/store/store.ts';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector };
