import { Task } from '../../../../pages/homepage/libs/types';
import { RootState } from '../../store.ts';

const selectTasks = (store: RootState): Task[] => store.tasks;

export { selectTasks };
