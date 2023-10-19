import { ValueOf } from '../../../../types';
import { Priority, Status } from '../enums';

type Task = {
  title: string;
  description: string;
  priority: ValueOf<typeof Priority>;
  status: ValueOf<typeof Status>;
};

export { type Task };
