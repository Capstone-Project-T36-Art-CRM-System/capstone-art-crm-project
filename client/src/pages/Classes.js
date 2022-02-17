// Material UI
import { Grid, Container, Typography, Stack, Button, Icon } from '@mui/material';

// Iconify
import plusFill from '@iconify/icons-eva/plus-fill';

// Router Navigation
import { Link as RouterLink } from 'react-router-dom';

// Page Components Import
import Page from '../components/Page';
import { 
    ClassesTable, 
    ClassesSearch } from '../components/_dashboard/classes/index';

export default function Classess() {
  return (
    <Page title="Dashboard | Clients">
        <Container maxWidth="xl">
            {/* Page Title */}
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    Classes
                </Typography>
                <Button
                    variant="contained"
                    component={RouterLink}
                    to="#"
                >
                    Add new class
                </Button>
            </Stack>
            {/* Page Title End*/}

            {/* Page Content */}
            <Grid container spacing={12}>
                <Grid item xs={12} sm={12} md={12}>
                    <ClassesSearch />
                    <ClassesTable/>
                </Grid>
            </Grid>
            {/* Page Content End */}
        </Container>
    </Page>
  );
}