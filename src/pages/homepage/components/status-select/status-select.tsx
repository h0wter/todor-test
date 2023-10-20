import { SelectChangeEvent } from '@mui/material/Select';
import { Select } from '../../../../libs/components';
import { ValueOf } from '../../../../libs/types';
import { Status } from '../../libs/enums';
import { FieldName } from '../task-item/enums';
import { OPTIONS } from './options.ts';

type Properties = {
  value: ValueOf<typeof Status> | '';
  onChange: (e: SelectChangeEvent) => void;
};

const StatusSelect: React.FC<Properties> = ({
  value,
  onChange,
}: Properties): JSX.Element => (
  <Select
    id="select-status-label"
    label="Status"
    labelId="select-status-label"
    name={FieldName.STATUS}
    value={value}
    options={OPTIONS}
    onChange={onChange}
  />
);

export { StatusSelect };
