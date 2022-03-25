import * as React from 'react';
import PropTypes from 'prop-types';
import { format, getTime } from 'date-fns';

// Form Controls
import { useFormContext, Controller } from 'react-hook-form';

// Material UI
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

// ----------------------------------------------------------------------

RHFDateTimePicker.propTypes = {
  date: PropTypes.object,
};

export default function RHFDateTimePicker({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
            renderInput={(props) => <TextField {...props} />}
            label="Birth Date"
            value={field.value ? format(field.value, 'dd MMM yyyy') : null}
            fullWidth
            error={!!error}
            helperText={error?.message}
            onChange={(e) => field.onChange(getTime(e))}
        />
        </LocalizationProvider>
      )}
    />
  );
}