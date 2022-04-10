import { useState } from 'react';
import { format } from 'date-fns';

// Material UI
import {
  Box,
  Table,
  Divider,
  MenuItem,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Dialog, 
  DialogTitle,
  Stack
} from '@mui/material';

// React Routing
import { Link as RouterLink } from 'react-router-dom';

// Utils
import { fCurrency } from '../../../../../utils/formatNumber';

// Components Import
import Iconify from '../../../../../components/Iconify';
import MenuPopover from '../../../../../components/MenuPopover';

// MOCK DATA
import { getTransactionListbyId } from '../../../../../mock_data/transactions';

import NewPaymentForm from './NewPaymentForm';


export default function AccountPaymentList({customerId}) {
  const [paymentList, setPaymentList] = useState(getTransactionListbyId(customerId));
  const [page, setPage] = useState(0);

  return (
    <>
      <TableContainer sx={{p: 1}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentList.slice(page * 5, page * 5 + 5).map((row) => (
              <TableRow key={row.transactionId}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ position: 'relative' }}>
                      <Box
                        sx={{
                          right: -15,
                          bottom: 0,
                          width: 18,
                          height: 18,
                          display: 'flex',
                          borderRadius: '50%',
                          position: 'absolute',
                          alignItems: 'center',
                          color: 'common.white',
                          bgcolor: 'error.main',
                          justifyContent: 'center',
                          ...(row.type === 'sales' && {
                            bgcolor: 'success.main',
                          }),
                        }}
                      >
                        <Iconify
                          icon={
                            row.type === 'sales'
                              ? 'eva:diagonal-arrow-left-down-fill'
                              : 'eva:diagonal-arrow-right-up-fill'
                          }
                          width={16}
                          height={16}
                        />
                      </Box>
                    </Box>
                    <Box sx={{ ml: 3.5 }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {row.type === 'sales' ? 'Payment for' : 'Refund for' }
                      </Typography>
                      <Typography variant="subtitle2"> {row.productCategory}</Typography>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell>
                  <Typography variant="subtitle2">{format(new Date(row.date), 'dd MMM yyyy')}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {format(new Date(row.date), 'p')}
                  </Typography>
                </TableCell>

                <TableCell>{fCurrency(row.amount)}</TableCell>
                
                <TableCell>
                  {row.productCategory === 'Event Ticket' && <Typography component={RouterLink} to={`/dashboard/event/${row.productId}`} variant="body2" sx={{ color: 'text.secondary' }}>
                    {row.note}
                  </Typography>}

                  {row.productCategory === 'Artwork' && <Typography component={RouterLink} to={`/dashboard/artwork/${row.productId}`} variant="body2" sx={{ color: 'text.secondary' }}>
                    {row.note}
                  </Typography>}

                </TableCell>

                <TableCell align="right">
                  <MoreMenuButton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,]}
        component="div"
        count={paymentList.length}
        rowsPerPage={5}
        page={page}
        onPageChange={(e, page) => setPage(page)}
      />
    </>
  );
}

function MoreMenuButton() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };

  return (
    <>
      <IconButton size="large" onClick={handleOpen}>
        <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        arrow="right-top"
        sx={{
          mt: -0.5,
          width: 160,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <MenuItem>
          <Iconify icon={'eva:download-fill'} sx={{ ...ICON }} />
          Download
        </MenuItem>

        <MenuItem>
          <Iconify icon={'eva:printer-fill'} sx={{ ...ICON }} />
          Print
        </MenuItem>

        <MenuItem>
          <Iconify icon={'eva:share-fill'} sx={{ ...ICON }} />
          Share
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ ...ICON }} />
          Delete
        </MenuItem>
      </MenuPopover>
    </>
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
