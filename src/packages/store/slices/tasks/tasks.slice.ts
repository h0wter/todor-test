import { createSlice } from '@reduxjs/toolkit';
import { Task } from '../../../../pages/homepage/libs/types';
import { addTask, changeTaskStatus, deleteTask } from './actions.ts';

type State = {
  tasks: Task[];
};

const initialState: State = {
  tasks: [],
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: 'tasks',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(changeTaskStatus.fulfilled, (state, { payload }) => {
        state.tasks = state.tasks.map((task) =>
          task.id === payload.id ? { ...task, status: payload.status } : task,
        );
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.tasks = state.tasks.filter((task) => task.id !== payload);
      });
  },
});

export { actions, name, reducer };
