// Material UI
import { Box, Grid, Container, Typography } from '@mui/material';

// Page Components Import
import Page from '../components/Page';
import {
    Table,
    Search
} from '../components/_clinets/main/index';

export default function DashboardMain() {
  return (
    <Page title="Dashboard | Main">
        <Container maxWidth="xl">
            {/* Page Title */}
            <Box sx={{ pb: 5  }}>
                <Typography variant="h3">Clients</Typography>
            </Box>
            {/* Page Title End*/}

            {/* Page Content */}
            <Grid container spacing={12}>
                <Grid item xs={12} sm={12} md={12}>
                    <Search />
                    <Table/>
                </Grid>
            </Grid>
            {/* Page Content End */}
        </Container>
    </Page>
  );
}