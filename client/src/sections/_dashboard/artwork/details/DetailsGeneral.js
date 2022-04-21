// Material UI
import { Box, Button, Card, Stack, Typography } from '@mui/material';

// Routing
import { Link as RouterLink } from 'react-router-dom';

// Components Import
import Label from '../../../../components/Label';
import Image from '../../../../components/Image';

// Utils
import { fCurrency } from '../../../../utils/formatNumber';


export default function DetailsGeneral({ artworkSelected }) {
  const { id, title, cover, material, height, width, year, price, author  } = artworkSelected
  return (
    <Stack spacing={3}>
      <Card>
        <Box sx={{ position: 'relative' }}>
          <Image alt={title} src={`https://artkudina.ru/images/works/webp/${cover}.webp?w=161&fit=crop&auto=format`} />
        </Box>
      </Card>
      <Card sx={{ p: 3 }}>
        {author && <><Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
          Author
        </Typography>
        <Typography variant="body2" mb={2} fontWeight={400}>{author}</Typography></>}

        {material && <><Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
          Material
        </Typography>
        <Typography variant="body2" mb={2} fontWeight={400}>{material}</Typography></>}

        {price && <><Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
          Price
        </Typography>
        <Typography variant="body2" mb={2} fontWeight={400}>{fCurrency(price)}</Typography></>}

        {(height && width)  && <><Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
          Size
        </Typography>
        <Typography variant="body2" mb={2} fontWeight={400}>{`${height} x ${width} cm`}</Typography></>}

        {year && <><Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
          Year
        </Typography>
        <Typography variant="body2" fontWeight={400}>{year}</Typography></>}
        
        <Stack direction='row' mt={4}>
          <Button size="small" component={RouterLink} to={`/dashboard/artwork/${id}/edit`} variant="outlined" sx={{ mr: 1 }}>
            Edit
          </Button>
          <Button size="small" color="inherit" variant="outlined">
            Delete
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
}
