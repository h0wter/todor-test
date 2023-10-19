import { Button, Modal } from '../../libs/components';
import { IconName } from '../../libs/enums';
import { useCallback, useToggle } from '../../libs/hooks';
import { TaskItem, TaskList } from './components';
import { Task } from './libs/types';

const TASK: Task = {
  title: 'Test task',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam.',
  priority: 'high',
  status: 'completed',
};

const HomePage = (): JSX.Element => {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  const handleAddTaskButtonClick = useCallback(() => toggleIsModalOpen(), []);

  return (
    <>
      <Button
        label="Add Task"
        frontIcon={IconName.PLUS}
        onClick={handleAddTaskButtonClick}
      />
      <TaskList />
      {isModalOpen && (
        <Modal
          onClose={() => {
            console.log('modal close');
            toggleIsModalOpen();
          }}
        >
          <TaskItem task={TASK} onCancelButtonClick={toggleIsModalOpen} />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
