// Material UI
import { Button, Card, Stack, Typography } from '@mui/material';
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
        {title && <><Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
          Title
        </Typography>
        <Typography variant="body2" mb={2} fontWeight={400}>{title}</Typography></>}

        {type && <><Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
          Event Type
        </Typography>
        <Typography variant="body2" mb={2} fontWeight={400}>{sentenceCase(type)}</Typography></>}

        {price && <><Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
          Ticket Price
        </Typography>
        <Typography variant="body2" mb={2} fontWeight={400}>{fCurrency(price)}</Typography></>}
        
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
