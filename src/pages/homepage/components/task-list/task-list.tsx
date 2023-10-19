import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import {
  useAppDispatch,
  useAppSelector,
  useCallback,
} from '../../../../libs/hooks';
import { selectTasks } from '../../../../packages/store/slices/tasks/selectors.ts';
import { getValidClassNames } from '../../../../libs/helpers/index.ts';
import { Icon } from '../../../../libs/components';
import { IconName } from '../../../../libs/enums/icon-name.enum.ts';

import styles from './styles.module.scss';
import {
  changeTaskStatus,
  deleteTask,
} from '../../../../packages/store/slices/tasks/actions.ts';
import { Status } from '../../libs/enums';

const TaskList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);

  const handleDoneClick = useCallback(
    (id: string) => () => {
      dispatch(
        changeTaskStatus({
          id,
          status: Status.COMPLETED,
        }),
      );
    },
    [],
  );

  const handleDeleteClick = useCallback(
    (id: string) => () => {
      dispatch(deleteTask(id));
    },
    [],
  );

  if (!tasks.length) {
    return <p>No tasks yet, please add some.</p>;
  }

  return (
    <Stack spacing={2}>
      {tasks.map(({ id, title, description, priority, status }) => {
        return (
          <div key={id}>
            <Paper
              className={getValidClassNames(styles.paper, styles[priority])}
            >
              <Stack direction="row" alignItems="center" gap={2}>
                <h3 className="h5">{title}</h3>
                <p>
                  Priority: <span className={styles.label}>{priority}</span>
                </p>
                <p>
                  Status: <span className={styles.label}>{status}</span>
                </p>
              </Stack>
              <p>{description}</p>
              <div className={styles.iconWrapper}>
                <Icon
                  className={styles.icon}
                  iconName={IconName.DONE}
                  size="lg"
                  onClick={handleDoneClick(id)}
                />
                <Icon
                  className={styles.icon}
                  iconName={IconName.EDIT}
                  size="lg"
                />
                <Icon
                  className={styles.icon}
                  iconName={IconName.DELETE}
                  size="lg"
                  onClick={handleDeleteClick(id)}
                />
              </div>
            </Paper>
          </div>
        );
      })}
    </Stack>
  );
};

export { TaskList };
