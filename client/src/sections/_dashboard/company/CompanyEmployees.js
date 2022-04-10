// Material UI
import { Grid, Stack } from '@mui/material';

// Components Import
import { EmployeeList } from './employees'


export default function CompanyEmployees() {

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={12}>
          <Stack spacing={3}>
              <EmployeeList />
          </Stack>
      </Grid>
    </Grid>
  );
}
