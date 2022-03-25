import { useState } from 'react';

// Material UI
import { Box, Card, Button, Typography, Stack, Collapse, TextField, CardHeader } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Components Import
import AccountPaymentList from './AccountPaymentList'
import Iconify from '../../../../components/Iconify';

export default function AccountPayments({customerId}) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <CardHeader title="Payments" sx={{ mb: 3 }} action={
        <Box>
          <Button size="small" startIcon={<Iconify icon={'eva:plus-fill'} />} onClick={() => setOpen(!open)}>
            Add new payment
          </Button>
        </Box>}
      />
        <CollapseNewPayment 
          isOpen={open}
          onOpen={() => setOpen(!open)}
          onCancel={() => setOpen(false)}
        />
        <AccountPaymentList customerId={customerId}/>
    </Card>
  );
}

function CollapseNewPayment({isOpen, onCancel}) {

  return (
    <Collapse in={isOpen} sx={{px: 2}}>
      <Box
        sx={{
          padding: 3,
          mb: 3,
          borderRadius: 1,
          bgcolor: 'background.neutral',
        }}
      >
        <Stack spacing={3}>
          <Typography variant="subtitle1">Add new payment</Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField fullWidth label="Name on card" />

            <TextField fullWidth label="Card number" />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField fullWidth label="Expiration date" placeholder="MM/YY" />

            <TextField fullWidth label="Cvv" />
          </Stack>

          <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
            <Button color="inherit" variant="outlined" onClick={onCancel}>
              Cancel
            </Button>
            <LoadingButton type="submit" variant="contained" onClick={onCancel}>
              Add Payemnt
            </LoadingButton>
          </Stack>
        </Stack>
      </Box>
    </Collapse>
  );
}
