import {
  type IconDefinition,
  faListCheck,
  faPlus,
  faTrashCan,
  faPenToSquare,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

import { IconName } from '../../../enums';
import { type ValueOf } from '../../../types';

const iconNameToSvg: Record<ValueOf<typeof IconName>, IconDefinition> = {
  [IconName.DELETE]: faTrashCan,
  [IconName.DONE]: faCheck,
  [IconName.EDIT]: faPenToSquare,
  [IconName.PLUS]: faPlus,
  [IconName.TASK_LIST]: faListCheck,
};

export { iconNameToSvg };
