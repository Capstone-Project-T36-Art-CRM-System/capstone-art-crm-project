import PropTypes from 'prop-types';

// Material UI
import { Grid, Pagination } from '@mui/material';

// Project Imports
import ArtworkCard from './ArtworkCard';

// Prop Types
ArtworkList.propTypes = {
  products: PropTypes.array.isRequired
};

export default function ArtworkList({ artworks, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {artworks.map((artwork) => (
        <Grid key={artwork.artworkId} item xs={12} sm={6} md={3}>
          <ArtworkCard artwork={artwork} />
        </Grid>
      ))}
        <Pagination count={10} disabled/>
    </Grid>
  );
}