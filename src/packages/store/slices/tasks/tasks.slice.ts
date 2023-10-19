import { createSlice } from '@reduxjs/toolkit';
import { Task } from '../../../../pages/homepage/libs/types';
import { addTask } from './actions.ts';

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
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.tasks.push(action.payload);
    });
  },
});

export { actions, name, reducer };
