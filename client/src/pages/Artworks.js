// Material UI
import { Container, Typography, Stack, Button } from '@mui/material';

// Iconify
import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';

// Router Navigation
import { Link as RouterLink } from 'react-router-dom';

// Page Components Import
import Page from '../components/Page';
import { ArtworkList, ArtworkSort } from '../components/_dashboard/artworks/index';

// Mockup Data
import ARTWORKS from '../mock_data/artworks';

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
                    startIcon={<Icon icon={plusFill} />}
                >
                    Add new Art
                </Button>
            </Stack>
            {/* Page Title End*/}

            {/* Page Content */}
            <Stack
                direction="row"
                flexWrap="wrap-reverse"
                alignItems="center"
                justifyContent="flex-end"
                sx={{ mb: 5 }}
            >
                <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>

                    <ArtworkSort />
                </Stack>
            </Stack>

            <ArtworkList artworks={ARTWORKS} />
            {/* Page Content End */}
        </Container>
    </Page>
  );
}