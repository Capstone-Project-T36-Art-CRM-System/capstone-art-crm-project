import { useState } from 'react';

// Material UI
import { Box, Card, Button, Typography, Stack, TextField, CardHeader, Dialog, DialogTitle, DialogActions } from '@mui/material';

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

// function ConfirmTransferDialog({ open, amount, contactInfo, onClose, onBlur, onChange }) {
//   return (
//     <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
//       <DialogTitle>Add Payment</DialogTitle>

//       <Stack spacing={3} sx={{ p: 3, pb: 0 }}>
//         <Stack direction="row" alignItems="center" spacing={2}>
//           <div>
//             <Typography variant="subtitle2">{contactInfo?.name}</Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//               {contactInfo?.email}
//             </Typography>
//           </div>
//         </Stack>

//         <TextField fullWidth multiline rows={2} placeholder="Write a message..." />
//       </Stack>
//       <DialogActions>
//         <Button variant="contained" disabled={amount === 0} onClick={onClose}>
//           Add Payemnt
//         </Button>
//         <Button onClick={onClose}>Cancel</Button>
//       </DialogActions>
//     </Dialog>
//   );
// }
