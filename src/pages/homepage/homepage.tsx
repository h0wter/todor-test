import { Button, Modal } from '../../libs/components';
import { IconName } from '../../libs/enums';
import { useToggle } from '../../libs/hooks';
import { TaskItem, TaskList } from './components';

import styles from './styles.module.scss';

const HomePage = (): JSX.Element => {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  return (
    <>
      <Button
        label="Add Task"
        className={styles.btn}
        frontIcon={IconName.PLUS}
        onClick={toggleIsModalOpen}
      />
      <TaskList />
      {isModalOpen && (
        <Modal onClose={toggleIsModalOpen}>
          <TaskItem onModalClose={toggleIsModalOpen} />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
