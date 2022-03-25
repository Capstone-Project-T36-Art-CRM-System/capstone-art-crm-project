// Material UI
import { Container, Typography, Stack, Button } from '@mui/material';

// Routing
import { Link as RouterLink } from 'react-router-dom';

// Page Components Import
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import ScheduleCalendar from '../../components/calendar/ScheduleCalendar';


export default function Calendar() {
  return (
    <Page title="Dashboard | Calendar">
        <Container maxWidth="lg">
            {/* Page Title */}
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    Calendar
                </Typography>
                <Button
                    variant="contained"
                    component={RouterLink}
                    to="#"
                    startIcon={ <Iconify icon={'eva:plus-fill'} width={20} height={20} />}
                >
                    Add event
                </Button>
            </Stack>
            {/* Page Title End*/}

            {/* Page Content */}
            <ScheduleCalendar />
            {/* Page Content End */}
        </Container>
    </Page>
  );
}