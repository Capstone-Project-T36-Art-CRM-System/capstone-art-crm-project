import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

// Routing
import { Link as RouterLink } from 'react-router-dom';

// Material UI
import {
  Card,
  Table,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Stack,
} from '@mui/material';

// Page Components Import
import Page from '../../components/Page';
import Label from '../../components/Label';
import SearchNotFound from '../../components/SearchNotFound';
import Iconify from '../../components/Iconify';

// Page Sections Import
import { CustomerListHead, CustomerListToolbar, CustomerMoreMenu } from '../../sections/_dashboard/customer/list';

// MOCK DATA
import { getCustomerList } from '../../mock_data/customers';


const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'phone', label: 'Phone', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'created', label: 'Created', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];



export default function CustomerList() {
  const [customerList, setCustomerList] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('created');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    getCustomerList()
    .then((data) => setCustomerList(data.docs.map((doc) => ({...doc.data(), id: doc.id }))))
    .catch((error) => console.log("Firebase Error: ", error.message))
  }, []);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - customerList.length) : 0;

  const filteredCustomers = applySortFilter(customerList, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredCustomers.length && Boolean(filterName);

  return (
    <Page title="Customers">
      <Container maxWidth='xl'>

        {/* Page Title */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
              Customers
          </Typography>
          <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/customer/new"
              startIcon={ <Iconify icon={'eva:plus-fill'} width={20} height={20} />}
          >
              Add customer
          </Button>
        </Stack>
        {/* Page Title End*/}

        <Card>
          <CustomerListToolbar
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <CustomerListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {filteredCustomers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, email, status, phone, created } = row;

                    return (
                      <TableRow
                        hover
                        key={id}
                      >
                        <TableCell align="left">{name}</TableCell>
                        <TableCell align="left">{phone}</TableCell>
                        <TableCell align="left">{email}</TableCell>
                        <TableCell align="left">{format(created, 'dd MMM, yyyy')}</TableCell>
                        <TableCell align="left">
                          <Label
                            variant='ghost'
                            color={(status === 'rejected' && 'error') || 'success'}
                          >
                            {sentenceCase(status)}
                          </Label>
                        </TableCell>

                        <TableCell align="right">
                          <CustomerMoreMenu customerId={id} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={customerList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e, page) => setPage(page)}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------

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

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return array.filter((customer) => 
      (
      customer.name.toLowerCase() + 
      customer.phone.toLowerCase() +
      customer.email.toLowerCase()
      )
      .indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}
