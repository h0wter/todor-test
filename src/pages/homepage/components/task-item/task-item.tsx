import { SyntheticEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
  useAppDispatch,
  useCallback,
  useNavigate,
  useState,
} from '../../../../libs/hooks';
import { Task } from '../../libs/types';

import styles from './styles.module.scss';
import { Priority, Status } from '../../libs/enums';
import { Button } from '../../../../libs/components';
import { FieldName } from './enums';
import {
  addTask,
  updateTask,
} from '../../../../packages/store/slices/tasks/actions.ts';
import { AppRoute } from '../../../../libs/enums';

type PartialTask = Partial<Task>;

type Properties = {
  task?: Task;
  onModalClose: () => void;
};

const TaskItem: React.FC<Properties> = ({
  task,
  onModalClose,
}: Properties): JSX.Element => {
  const [values, setValues] = useState<PartialTask | undefined>(task);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChangeSelect = useCallback((e: SelectChangeEvent) => {
    const { name, value } = e.target;

    setValues((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const handleInputChange = useCallback((e: SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;

    if (target.name === FieldName.DESCRIPTION) {
      target.style.height = target.scrollHeight + 'px';
    }

    setValues((prevState) => ({ ...prevState, [target.name]: target.value }));
  }, []);

  const handleSubmitClick = useCallback(() => {
    if (!values?.title) {
      toast.error('You must enter a title.');
      return;
    }
    if (!values?.description) {
      toast.error('You must enter a description.');
      return;
    }
    if (!values?.priority) {
      toast.error('You have to choose a priority.');
      return;
    }
    if (!values?.status) {
      toast.error('You have to choose a status.');

      return;
    }

    if (!task) {
      const promise = dispatch(addTask({ ...values, id: uuidv4() } as Task));
      toast.promise(promise, {
        loading: 'Trying to add.',
        success: 'The task has been successfully added.',
        error: 'Error when adding.',
      });
    } else {
      const promise = dispatch(updateTask(values as Task));
      toast.promise(promise, {
        loading: 'Trying to update.',
        success: 'The task has been successfully updated.',
        error: 'Error when updating.',
      });

      navigate(AppRoute.ROOT);
    }

    onModalClose();
  }, [values]);

  return (
    <Stack spacing={2}>
      <Input
        className={styles.title}
        name={FieldName.TITLE}
        placeholder="Enter title"
        value={values?.title || ''}
        onChange={handleInputChange}
      />
      <Stack direction="row" alignItems="stretch">
        <FormControl
          variant="outlined"
          sx={{ m: 1, minWidth: 120, flexGrow: 1 }}
        >
          <InputLabel id="select-priority-label">Priority</InputLabel>
          <Select
            labelId="select-priority-label"
            id="select-priority"
            name={FieldName.PRIORITY}
            value={values?.priority || ''}
            onChange={handleChangeSelect}
            label="Priority"
          >
            <MenuItem value={Priority.LOW}>Low</MenuItem>
            <MenuItem value={Priority.MEDIUM}>Medium</MenuItem>
            <MenuItem value={Priority.HIGH}>High</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          sx={{ m: 1, minWidth: 120, flexGrow: 1 }}
        >
          <InputLabel id="select-status-label">Status</InputLabel>
          <Select
            labelId="select-status-label"
            id="select-status"
            name={FieldName.STATUS}
            value={values?.status || ''}
            onChange={handleChangeSelect}
            label="Status"
          >
            <MenuItem value={Status.NOT_COMPLETED}>Not completed</MenuItem>
            <MenuItem value={Status.IN_PROGRESS}>In progress</MenuItem>
            <MenuItem value={Status.COMPLETED}>Completed</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <div className={styles.textAreaWrapper}>
        <textarea
          name={FieldName.DESCRIPTION}
          className={styles.textArea}
          cols={60}
          autoFocus
          onInput={handleInputChange}
          value={values?.description}
        />
      </div>
      <div className={styles.btnWrapper}>
        <Button
          label={!task ? 'Add' : 'Update'}
          className={styles.btn}
          onClick={handleSubmitClick}
        />
        <Button label="Cancel" className={styles.btn} onClick={onModalClose} />
      </div>
    </Stack>
  );
};

export { TaskItem };
