import {
  type IconDefinition,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons';

import { IconName } from '../../../enums';
import { type ValueOf } from '../../../types';

const iconNameToSvg: Record<ValueOf<typeof IconName>, IconDefinition> = {
  [IconName.TASK_LIST]: faListCheck,
};

export { iconNameToSvg };
