// Material UI
import { Box, Grid, Container, Typography } from '@mui/material';

// Page Components Import
import Page from '../components/Page';
import {
    MainActiveStudents,
    MainNewCustomers,
    MainClassesComplited,
    MainLeads
} from '../components/_dashboard/main/index';

export default function DashboardMain() {
  return (
    <Page title="Dashboard | Main">
        <Container maxWidth="xl">
            {/* Page Title */}
            <Box sx={{ pb: 5 }}>
                <Typography variant="h3">Dashboard</Typography>
            </Box>
            {/* Page Title End*/}

            {/* Page Content */}
            <Grid container spacing={3}>
                <Grid item xs={6} sm={6} md={3}>
                    <MainClassesComplited />
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <MainNewCustomers />
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <MainActiveStudents />
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <MainLeads />
                </Grid>
            </Grid>
            {/* Page Content End */}
        </Container>
    </Page>
  );
}