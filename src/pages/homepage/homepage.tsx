import { Button, Modal } from '../../libs/components';
import { IconName } from '../../libs/enums';
import { useCallback, useToggle } from '../../libs/hooks';
import { TaskItem, TaskList } from './components';

import styles from './styles.module.scss';

const HomePage = (): JSX.Element => {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  const handleAddTaskButtonClick = useCallback(() => toggleIsModalOpen(), []);

  return (
    <>
      <Button
        label="Add Task"
        className={styles.btn}
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
          <TaskItem onModalClose={toggleIsModalOpen} />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
