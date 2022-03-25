import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function ClassSearch(props) {
  return (
    <Stack spacing={2} sx={{ width: 300 }} {...props}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search class"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}