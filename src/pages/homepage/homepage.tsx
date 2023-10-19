import { useParams } from 'react-router-dom';
import { Button, Modal } from '../../libs/components';
import { AppRoute, IconName } from '../../libs/enums';
import {
  useAppSelector,
  useCallback,
  useEffect,
  useMemo,
  useToggle,
  useNavigate,
} from '../../libs/hooks';
import { TaskItem, TaskList } from './components';
import { selectTasks } from '../../packages/store/slices/tasks/selectors.ts';

import styles from './styles.module.scss';

const HomePage = (): JSX.Element => {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  const tasks = useAppSelector(selectTasks);
  const { taskId } = useParams();
  const navigate = useNavigate();

  const selectedTask = useMemo(
    () => tasks.find((task) => task.id === taskId),
    [taskId],
  );

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

  return (
    <>
      <Button
        label="Add Task"
        className={styles.btn}
        frontIcon={IconName.PLUS}
        onClick={handleAddTaskClick}
      />
      {!!tasks.length && <TaskList tasks={tasks} />}
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <TaskItem task={selectedTask} onModalClose={handleModalClose} />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
