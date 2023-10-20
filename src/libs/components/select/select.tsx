import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import LibrarySelect, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

type Option = {
  value: string | number;
  label: string;
};

type Properties = {
  id: string;
  label: string;
  labelId: string;
  name: string;
  onChange: (e: SelectChangeEvent) => void;
  options: Option[];
  value: string;
};

const Select: React.FC<Properties> = (props: Properties): JSX.Element => {
  const { id, label, labelId, name, onChange, options, value } = props;

  return (
    <FormControl variant="outlined" sx={{ m: 1, minWidth: 120, flexGrow: 1 }}>
      <InputLabel id="select-status-label">{label}</InputLabel>
      <LibrarySelect
        labelId={labelId}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        label={label}
      >
        {options.map(({ label, value }, idx) => {
          return (
            <MenuItem value={value} key={idx}>
              {label}
            </MenuItem>
          );
        })}
      </LibrarySelect>
    </FormControl>
  );
};

export { Select };
