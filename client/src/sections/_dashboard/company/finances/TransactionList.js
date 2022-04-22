import { useState } from 'react';

// Material UI
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  IconButton,
  TableContainer,
  TablePagination,
  Card,
  CardHeader,
  Dialog,
  DialogTitle,
  Stack,
  Box,
  Button,
} from '@mui/material';

// React Routing
import { Link as RouterLink } from 'react-router-dom';

// Components Import
import Iconify from '../../../../components/Iconify';

// MOCK DATA
import { getTransactionList } from '../../../../mock_data/transactions';
import { format } from 'date-fns';
import { CustomerListHead } from '../../customer/list';
import { fCurrency } from '../../../../utils/formatNumber';
import { capitalCase } from 'change-case';
import NewTransactionForm from './NewTransactionForm';

export default function TransactionList() {
    const [transactionList, setTransactionList] = useState(getTransactionList().map(transaction => ({
      transactionId: transaction.transactionId,
        note: transaction.note,
        type: transaction.type,
        amount: (transaction.type === 'sales' ? '' : '-') + fCurrency(transaction.amount),
        date: transaction.date,
    })));
    const [page, setPage] = useState(0);

  const TABLE_HEAD = [
    { id: 'note', label: 'Note', alignRight: false },
    { id: 'type', label: 'Type', alignRight: false },
    { id: 'amount', label: 'Amount', alignRight: false },
    { id: 'date', label: 'Date', alignRight: false },
    // { id: '' },
  ];

  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('date');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const filteredTransactions = applySortFilter(transactionList, getComparator(order, orderBy));

  return (
    <Card>
      <CardHeader title="Transaction List" sx={{pb: 3}} action={
        <TransactionDialog>
          <Button size="small" startIcon={<Iconify icon={'eva:plus-fill'} />}>
            Add new transaction
          </Button>
        </TransactionDialog>}
      />
      <TableContainer>
        <Table>
            <CustomerListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                onRequestSort={handleRequestSort}
            />  
          <TableBody>
            {filteredTransactions.slice(page * 5, page * 5 + 5).map((row) => (
              <TableRow key={row?.transactionId} hover>

                <TableCell>{row?.note}</TableCell>

                <TableCell>{capitalCase(row?.type)}</TableCell>

                <TableCell>{row?.amount}</TableCell>

                <TableCell>{format(new Date(row?.date), "dd MMM yyyy, p")}</TableCell>

                {/* <TableCell align="right">
                  <TransactionDialog transactionId={row?.transactionId}/>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,]}
        component="div"
        count={transactionList.length}
        rowsPerPage={5}
        page={page}
        onPageChange={(e, page) => setPage(page)}
      />
    </Card>
  );
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
}
  
function getComparator(order, orderBy) {
    return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}





function TransactionDialog({ transactionId, children }) {
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
        <DialogTitle>{!transactionId ? 'Add Transaction' : 'Update Transaction'}</DialogTitle>
        <Stack spacing={3} sx={{ p: 3, pb: 0 }}>

          <NewTransactionForm onCloseDialog={handleClose} transactionId={transactionId}  />

        </Stack>
      </Dialog>
    </>
  );
}