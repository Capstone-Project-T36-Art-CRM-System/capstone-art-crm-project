// Material UI
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// Router Navigation
import { Link as RouterLink } from 'react-router-dom';

// Utils
import { fCurrency } from '../../../utils/formatNumber';

// Styling
const ArtworkImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

export default function ActionAreaCard({ artwork }) {
  const { artworkId, title, cover, material, size, year, price, author, description } = artwork;

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* Artwork Cover */}
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <ArtworkImgStyle alt={artworkId + title} src={`/static/artworks/${cover}.webp`} />
      </Box>
      {/* Artwork Cover End */}

      <Stack spacing={2} sx={{ p: 3 }}>
        {/* Artwork Title */}
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {`${artworkId}. ${title}`}
          </Typography>
        </Link>
        {/* Artwork Title End */}

        {/* Artwork Info */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">
            {fCurrency(price)}
          </Typography>
        </Stack>
        {/* Artwork End */}
      </Stack>
    </Card>
  );
}
