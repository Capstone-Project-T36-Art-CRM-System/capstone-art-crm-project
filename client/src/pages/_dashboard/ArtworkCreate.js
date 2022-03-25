// Routing
import { useParams, useLocation } from 'react-router-dom';

// Material UI
import { Container, Stack, Typography } from '@mui/material';

// Page Components Import
import Page from '../../components/Page';

// Page Sections Import
import ArtworkNewForm from '../../sections/_dashboard/artwork/ArtworkNewForm';

// MOCK DATA
import { getArtworkrbyId } from '../../mock_data/artworks';


export default function ArtworkCreate() {
  const { pathname } = useLocation();
  const { artworkId = '' } = useParams();
  const isEdit = pathname.includes('edit');

  const currentArtwork = getArtworkrbyId(artworkId);

  return (
    <Page title={`Artworks – ${!isEdit ? 'Create Artwork' : 'Edit Artwork'}`}>
      <Container maxWidth='lg'>

        {/* Page Title */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Artworks – <Typography variant="h4" display="inline" color="text.secondary">{!isEdit ? 'Create Artwork' : 'Edit Artwork'}</Typography>
          </Typography>
        </Stack>
        {/* Page Title End*/}

        <ArtworkNewForm isEdit={isEdit} currentArtwork={currentArtwork} />
      </Container>
    </Page>
  );
}
