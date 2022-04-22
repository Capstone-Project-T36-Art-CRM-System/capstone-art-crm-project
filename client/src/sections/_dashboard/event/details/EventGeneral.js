// Material UI
import { Box, Button, Card, Dialog, DialogTitle, IconButton, Stack, Typography } from '@mui/material';
import { sentenceCase } from 'change-case';
import { useState } from 'react';

// Routing
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '../../../../components/Iconify';

// Utils
import { fCurrency } from '../../../../utils/formatNumber';
import NewEventForm from '../NewEventForm';


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
                  
          <EventDialog eventId={eventId}>
            <Button size="small" variant="outlined" sx={{ mr: 1 }}>
              Edit
            </Button>
          </EventDialog>
          <Button size="small" color="inherit" variant="outlined">
            Delete
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
}


function EventDialog({ eventId, children }) {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      {children ? 
      <Box onClick={handleOpen}>
        {children}
      </Box>
      :
      <IconButton onClick={handleOpen}>
        <Iconify icon={'eva:edit-fill'} width={20} height={20} />
      </IconButton>
      }

      <Dialog open={Boolean(open)} fullWidth maxWidth="xs" onCancel={handleClose}>
        <DialogTitle>{!eventId ? 'Add Event' : 'Update Event'}</DialogTitle>
        <Stack spacing={3} sx={{ p: 3, pb: 0 }}>

          <NewEventForm onCloseDialog={handleClose} eventId={eventId}  />

        </Stack>
      </Dialog>
    </>
  );
}
