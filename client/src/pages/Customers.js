// Material UI
import { Grid, Container, Typography, Stack, Button, Icon } from '@mui/material';

// Iconify
import plusFill from '@iconify/icons-eva/plus-fill';

// Router Navigation
import { Link as RouterLink } from 'react-router-dom';

// Page Components Import
import Page from '../components/Page';
import { 
    CustomersTable, 
    CustomersSearch } from '../components/_dashboard/customers/index';

export default function Customers() {
  return (
    <Page title="Dashboard | Clients">
        <Container maxWidth="xl">
            {/* Page Title */}
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    Customers
                </Typography>
                <Button
                    variant="contained"
                    component={RouterLink}
                    to="#"
                    startIcon={<Icon icon={plusFill} />}
                >
                    Add new customer
                </Button>
            </Stack>
            {/* Page Title End*/}

            {/* Page Content */}
            <Grid container spacing={12}>
                <Grid item xs={12} sm={12} md={12}>
                    <CustomersSearch />
                    <CustomersTable/>
                </Grid>
            </Grid>
            {/* Page Content End */}
        </Container>
    </Page>
  );
}