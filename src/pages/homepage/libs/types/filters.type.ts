import { ValueOf } from '../../../../libs/types';
import { Priority, Status } from '../enums';

type Filters = {
  title: string;
  status: ValueOf<typeof Status> | '';
  priority: ValueOf<typeof Priority> | '';
};

export { type Filters };
