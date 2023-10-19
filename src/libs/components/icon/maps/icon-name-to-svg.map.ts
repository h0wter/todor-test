import {
  type IconDefinition,
  faListCheck,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import { IconName } from '../../../enums';
import { type ValueOf } from '../../../types';

const iconNameToSvg: Record<ValueOf<typeof IconName>, IconDefinition> = {
  [IconName.PLUS]: faPlus,
  [IconName.TASK_LIST]: faListCheck,
};

export { iconNameToSvg };
