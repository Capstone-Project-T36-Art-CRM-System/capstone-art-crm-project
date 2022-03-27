import { useState } from 'react';

// Material UI
import { Box, Card, Button, Stack, CardHeader, Dialog, DialogTitle } from '@mui/material';

// Components Import
import AccountPaymentList from './AccountPaymentList'
import Iconify from '../../../../../components/Iconify';
import NewPaymentForm from './NewPaymentForm';

export default function AccountPayments({ customerId }) {
  const [open, setOpen] = useState(false);
  const [currentPayment, setCurrentPayment] = useState(null);

  return (
    <Card>
      <CardHeader title="Payments" sx={{ mb: 3 }} action={
        <Box>
          <Button size="small" startIcon={<Iconify icon={'eva:plus-fill'} />} onClick={() => setOpen(!open)}>
            Add new payment
          </Button>
        </Box>}
      />
        <AccountPaymentList customerId={customerId}/>

        <DialogNewDocument 
          isOpen={open}
          onCloseDialog={() => setOpen(false)}
          currentPayment={currentPayment}
        />
    </Card>
  );
}

function DialogNewDocument({isOpen, onCloseDialog, customerId}) {

  return (
    <Dialog open={isOpen} fullWidth maxWidth="xs" onCancel={onCloseDialog}>
      <DialogTitle>{!customerId ? 'Add Payment' : 'Update Payment'}</DialogTitle>
      <Stack spacing={3} sx={{ p: 3, pb: 0 }}>
        <NewPaymentForm onCloseDialog={onCloseDialog} customerId={customerId}  />
      </Stack>
    </Dialog>
  );
}