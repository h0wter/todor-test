import { ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal } from '../../libs/components';
import { AppRoute, IconName } from '../../libs/enums';
import {
  useCallback,
  useEffect,
  useToggle,
  useNavigate,
  useState,
} from '../../libs/hooks';
import { PrioritySelect, StatusSelect, TaskItem, TaskList } from './components';
import { SelectChangeEvent } from '@mui/material/Select';
import { Filters } from './libs/types';
import { useFilteredTasks } from './libs/hooks';
import TextField from '@mui/material/TextField';

import styles from './styles.module.scss';

const INITIAL_FILTERS_STATE: Filters = {
  title: '',
  status: '',
  priority: '',
};

const HomePage = (): JSX.Element => {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS_STATE);

  const { taskId } = useParams();
  const navigate = useNavigate();

  const { filteredTasks, selectedTask, allTasksLength, filteredTasksLength } =
    useFilteredTasks({
      taskId,
      filters,
    });

  useEffect(() => {
    if (taskId) {
      toggleIsModalOpen();
    }
  }, [taskId]);

  const handleAddTaskClick = useCallback(() => {
    navigate(AppRoute.ROOT);
    toggleIsModalOpen();
  }, []);

  const handleModalClose = useCallback(() => {
    toggleIsModalOpen();
    navigate(AppRoute.ROOT);
  }, []);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({ ...prevState, title: e.target.value }));
  }, []);

  const handleChangeSelect = useCallback((e: SelectChangeEvent) => {
    const { name, value } = e.target;

    setFilters((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const handleClearSelects = useCallback(() => {
    setFilters(INITIAL_FILTERS_STATE);
  }, []);

  return (
    <>
      <Button
        label="Add Task"
        className={styles.btn}
        frontIcon={IconName.PLUS}
        onClick={handleAddTaskClick}
      />
      {!!allTasksLength && (
        <>
          <br />
          <div className={styles.selectWrapper}>
            <TextField
              className={styles.input}
              name="title"
              label="Search by title"
              variant="outlined"
              onChange={handleInputChange}
            />
            <PrioritySelect
              value={filters?.priority || ''}
              onChange={handleChangeSelect}
            />
            <StatusSelect
              value={filters?.status || ''}
              onChange={handleChangeSelect}
            />
            <Button label="Reset Filters" onClick={handleClearSelects} />
          </div>
        </>
      )}
      {!!filteredTasksLength && <TaskList tasks={filteredTasks} />}
      {!filteredTasksLength && !!allTasksLength && (
        <p className="h5">There are no tasks matching the selected filters.</p>
      )}
      {!filteredTasksLength && !allTasksLength && (
        <p className="h5">You don&apos;t have a task yet, please add it.</p>
      )}
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <TaskItem task={selectedTask} onModalClose={handleModalClose} />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
