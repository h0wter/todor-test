import { SelectChangeEvent } from '@mui/material/Select';
import { Select } from '../../../../libs/components';
import { ValueOf } from '../../../../libs/types';
import { Priority } from '../../libs/enums';
import { FieldName } from '../task-item/enums';
import { OPTIONS } from './options.ts';

type Properties = {
  value: ValueOf<typeof Priority> | '';
  onChange: (e: SelectChangeEvent) => void;
};

const PrioritySelect: React.FC<Properties> = ({
  value,
  onChange,
}: Properties): JSX.Element => (
  <Select
    id="select-priority"
    label="Priority"
    labelId="select-priority-label"
    name={FieldName.PRIORITY}
    value={value}
    options={OPTIONS}
    onChange={onChange}
  />
);

export { PrioritySelect };
