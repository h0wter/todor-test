import { ValueOf } from '../../../../libs/types';
import { Priority, Status } from '../enums';

type Task = {
  id: string;
  title: string;
  description: string;
  priority: ValueOf<typeof Priority>;
  status: ValueOf<typeof Status>;
};

export { type Task };
