// Material UI
import { Grid, Container, Typography, Stack, Button, Icon } from '@mui/material';

import Pagination from '@mui/material/Pagination';

// Router Navigation
import { Link as RouterLink } from 'react-router-dom';

// Page Components Import
import Page from '../components/Page';
import { ArtCards } from '../components/_dashboard/artworks/index';

export default function Artworks() {
  return (
    <Page title="Dashboard | Artworks">
        <Container maxWidth="xl">
            {/* Page Title */}
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    ArtWorks
                </Typography>
                <Button
                    variant="contained"
                    component={RouterLink}
                    to="#"
                    
                >
                    Add new Art
                </Button>
            </Stack>
            {/* Page Title End*/}

            {/* Page Content */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <ArtCards/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <ArtCards/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <ArtCards/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <ArtCards/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <ArtCards/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <ArtCards/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <ArtCards/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <ArtCards/>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <Pagination count={10} disabled />
                </Grid>
            </Grid>
            {/* Page Content End */}
        </Container>
    </Page>
  );
}