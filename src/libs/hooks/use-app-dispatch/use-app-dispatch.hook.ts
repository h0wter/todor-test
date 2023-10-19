import { useDispatch } from 'react-redux';

import { type AppDispatch } from '../../../packages/store/store.ts';

const useAppDispatch = useDispatch<AppDispatch>;

export { useAppDispatch };
