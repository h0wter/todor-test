import { Task } from '../../../../pages/homepage/libs/types/task.type.ts';
import { createAppAsyncThunk } from '../../appAsyncThunk.ts';
import { ActionType } from './enums/action-type.enum.ts';

const addTask = createAppAsyncThunk<Task, Task>(
  ActionType.ADD_TASK,
  (task) => task,
);

export { addTask };
