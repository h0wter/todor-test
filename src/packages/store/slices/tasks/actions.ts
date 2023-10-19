import { ValueOf } from '../../../../libs/types';
import { Status } from '../../../../pages/homepage/libs/enums';
import { Task } from '../../../../pages/homepage/libs/types/task.type.ts';
import { createAppAsyncThunk } from '../../appAsyncThunk.ts';
import { ActionType } from './enums/action-type.enum.ts';

type ChangeStatusPayload = {
  id: string;
  status: ValueOf<typeof Status>;
};

const addTask = createAppAsyncThunk<Task, Task>(
  ActionType.ADD_TASK,
  (task) => task,
);

const changeTaskStatus = createAppAsyncThunk<
  ChangeStatusPayload,
  ChangeStatusPayload
>(ActionType.CHANGE_STATUS, (payload) => payload);

const deleteTask = createAppAsyncThunk<string, string>(
  ActionType.DELETE_TASK,
  (payload) => payload,
);

export { addTask, changeTaskStatus, deleteTask };
