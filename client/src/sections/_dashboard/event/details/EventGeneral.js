// Material UI
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import { sentenceCase } from 'change-case';

// Routing
import { Link as RouterLink } from 'react-router-dom';

// Utils
import { fCurrency } from '../../../../utils/formatNumber';


export default function EventGeneral({ eventSelected }) {
  const { eventId, title, price, type  } = eventSelected

  return (
    <Stack spacing={3}>
      <Card sx={{ p: 3 }}>
        <Typography variant="h4" mb={5}>{title}</Typography>

        <Stack direction='row' justifyContent='space-between'>
          <Box>
            <Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
              Event Type
            </Typography>
            <Typography variant="h5" fontWeight={400}>{sentenceCase(type)}</Typography>
          </Box>
          <Box>
            <Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
              Ticket Price
            </Typography>
            <Typography variant="h5" fontWeight={400}>{fCurrency(price)}</Typography>
          </Box>
        </Stack>
                <Stack direction='row' mt={4}>
          <Button size="small" component={RouterLink} to={`/dashboard/event/${eventId}/edit`} variant="outlined" sx={{ mr: 1 }}>
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
