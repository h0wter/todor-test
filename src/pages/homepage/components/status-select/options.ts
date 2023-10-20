import { Status } from '../../libs/enums';

const OPTIONS = [
  {
    value: Status.NOT_COMPLETED,
    label: 'Not completed',
  },
  {
    value: Status.IN_PROGRESS,
    label: 'In progress',
  },
  {
    value: Status.COMPLETED,
    label: 'Completed',
  },
];

export { OPTIONS };
