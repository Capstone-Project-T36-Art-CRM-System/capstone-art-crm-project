// Material UI
import { Grid, Container, Typography, Stack, Button, Icon } from '@mui/material';

// Iconify
import plusFill from '@iconify/icons-eva/plus-fill';

// Router Navigation
import { Link as RouterLink } from 'react-router-dom';

// Page Components Import
import Page from '../components/Page';
import { ScheduleCalendar } from '../components/_dashboard/schedule/index';

export default function Schedule() {
  return (
    <Page title="Dashboard | Schedule">
        <Container maxWidth="xl">
            {/* Page Title */}
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    Schedule
                </Typography>
                <Button
                    variant="contained"
                    component={RouterLink}
                    to="#"
                    startIcon={<Icon icon={plusFill} />}
                >
                    Add new event
                </Button>
            </Stack>
            {/* Page Title End*/}

            {/* Page Content */}
            <Grid container spacing={12}>
                <Grid item xs={12} sm={12} md={12}>
                    <ScheduleCalendar />
                </Grid>
            </Grid>
            {/* Page Content End */}
        </Container>
    </Page>
  );
}