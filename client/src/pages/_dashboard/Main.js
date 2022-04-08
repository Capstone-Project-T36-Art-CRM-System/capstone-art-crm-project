// Material UI
import { Box, Grid, Container, Typography } from '@mui/material';

// Page Components Import
import Page from '../../components/Page';

// Page Sections Import
import {
    MainActiveStudents,
    MainNewCustomers,
    MainClassesComplited,
    MainLeads,
    MainFinancesGraph,
    MainTasks
} from '../../sections/_dashboard/main';

export default function Main() {
  return (
    <Page title="Dashboard | Main">
        <Container maxWidth="xl">
            {/* Page Title */}
            <Box sx={{ pb: 5  }}>
                <Typography gutterBottom variant="h4">Dashboard</Typography>
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

                <Grid item xs={12} md={6} lg={8}>
                    <MainFinancesGraph />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <MainTasks />
                </Grid>

                {/* <Grid item xs={12} md={6} lg={4}>
                    <MainSocialsStats />
                </Grid> */}

            </Grid>
            {/* Page Content End */}
        </Container>
    </Page>
  );
}