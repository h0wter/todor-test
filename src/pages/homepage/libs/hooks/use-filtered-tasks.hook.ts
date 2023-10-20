import { useAppSelector, useMemo } from '../../../../libs/hooks';
import { selectTasks } from '../../../../packages/store/slices/tasks/selectors';
import { Filters, Task } from '../types';

type Params = {
  taskId?: string;
  filters: Filters;
};

const getFilteredTasks = (tasks: Task[], filters: Filters): Task[] => {
  const { priority, status, title } = filters;

  if (!priority && !status && !title) {
    return tasks;
  }

  return tasks.filter((task) => {
    return (
      (!priority || task.priority === priority) &&
      (!status || task.status === status) &&
      (!title || task.title.toLowerCase().includes(title.toLowerCase()))
    );
  });
};

const useFilteredTasks = ({ taskId, filters }: Params) => {
  const tasks = useAppSelector(selectTasks);

  const selectedTask = useMemo(
    () => tasks.find((task) => task.id === taskId),
    [taskId],
  );

  const filteredTasks = getFilteredTasks(tasks, filters);

  return {
    filteredTasks,
    selectedTask,
    allTasksLength: tasks.length,
    filteredTasksLength: filteredTasks.length,
  };
};

export { useFilteredTasks };
