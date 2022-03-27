// Material UI
import { Grid, Container, Typography, Stack, Button } from '@mui/material';

// Iconify
import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';

// Router Navigation
import { Link as RouterLink } from 'react-router-dom';

// Page Components Import
import Page from '../components/Page';
import { CustomersTable } from '../components/_dashboard/customers/index';

export default function CustomerInfo() {
  return (
    <Page title="Dashboard | Customers">
        <Container maxWidth="xl">
            {/* Page Title */}
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    Customers - <span style={{ color: 'grey' }}>Alexander Kudin</span>
                </Typography>
            </Stack>
            {/* Page Title End*/}

            {/* Page Content */}
            <Grid container spacing={12}>
                <Grid item xs={12} sm={12} md={12}>
                    <CustomersTable/>
                </Grid>
            </Grid>
            {/* Page Content End */}
        </Container>
    </Page>
  );
}