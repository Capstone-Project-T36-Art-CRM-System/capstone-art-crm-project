// Material UI
import { Grid, Stack } from '@mui/material';

// Components Import
import { ScheduleList } from './schedule'


export default function EventSchedule() {

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={12}>
          <Stack spacing={3}>
              <ScheduleList />
          </Stack>
      </Grid>
    </Grid>
  );
}
