// Routing
import { useParams, useLocation } from 'react-router-dom';

// Material UI
import { CircularProgress, Container, Stack, Typography } from '@mui/material';

// Page Components Import
import Page from '../../components/Page';

// Page Sections Import
import ArtworkNewForm from '../../sections/_dashboard/artwork/ArtworkNewForm';

// MOCK DATA
import { getArtworkrbyId } from '../../mock_data/artworks';
import { useEffect, useState } from 'react';


export default function ArtworkCreate() {
  const { pathname } = useLocation();
  const { artworkId = '' } = useParams();
  const isEdit = pathname.includes('edit');

  const [currentArtwork, setCurrentArtwork] = useState(null)

  useEffect(() => {
    !isEdit ? 
    setCurrentArtwork(null)
    :
    getArtworkrbyId(artworkId)
    .then((doc) => setCurrentArtwork(doc.data()))
    .catch((error) => console.log("Firebase Error: ", error.message))
  }, [artworkId, isEdit]);

  return (
    !currentArtwork && isEdit ? 
    <CircularProgress /> 
    :
    <Page title={`Artworks – ${!isEdit ? 'Create Artwork' : 'Edit Artwork'}`}>
      <Container maxWidth='xl'>
        {console.log(artworkId)}
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
