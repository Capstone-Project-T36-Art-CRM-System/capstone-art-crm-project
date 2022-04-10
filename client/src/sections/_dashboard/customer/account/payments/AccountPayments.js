import { useState } from 'react';
import PropTypes from 'prop-types';

// Material UI
import { Box, Card, Button, Stack, CardHeader, Dialog, DialogTitle, IconButton } from '@mui/material';

// Components Import
import AccountPaymentList from './AccountPaymentList'
import Iconify from '../../../../../components/Iconify';
import NewPaymentForm from './NewPaymentForm';

export default function AccountPayments({ customerId }) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <CardHeader title="Payments" sx={{ mb: 3 }} action={
        <Box>
          <PaymentDialog customerId={customerId}>
            <Button size="small" startIcon={<Iconify icon={'eva:plus-fill'} />} onClick={() => setOpen(!open)}>
              Add new payment
            </Button>
          </PaymentDialog>
        </Box>}
      />
        <AccountPaymentList customerId={customerId}/>
    </Card>
  );
}

// Props
PaymentDialog.propTypes = {
  customerId: PropTypes.string,
  transactionId: PropTypes.number,
  children: PropTypes.node,
};

function PaymentDialog({ customerId, transactionId, children }) {
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
        <DialogTitle>{!transactionId ? 'Add Payemnt' : 'Update Payment'}</DialogTitle>
        <Stack spacing={3} sx={{ p: 3, pb: 0 }}>

          <NewPaymentForm onCloseDialog={handleClose} customerId={customerId}  />

        </Stack>
      </Dialog>
    </>
  );
}

