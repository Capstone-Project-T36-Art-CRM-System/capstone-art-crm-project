import * as React from 'react';
import { filter } from 'lodash';

// Material UI
import { DataGrid } from '@mui/x-data-grid';

// Utils
import { fCurrency } from '../../../utils/formatNumber';
import { Box, Card, CardHeader } from '@mui/material';
import { CustomerTableToolbar } from '.';

const columns = [
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 2,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'id', headerName: 'ID', flex: 0.5 },
  { field: 'status', headerName: 'Status', flex: 1 },
  { field: 'phone', headerName: 'Phone', flex: 2 },
  { field: 'balance', headerName: 'Balance', flex: 1 },
  { field: 'created', headerName: 'Created', flex: 1 },
  { field: 'age', headerName: 'Age', type: 'number', flex: 0.5 },

];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: "Active", phone: "+1 (305) 555-1005", balance: fCurrency(860), created: "Sep 25, 2021"},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status: "Inactive", phone: "+1 (305) 555-1005", balance: fCurrency(860), created: "Sep 25, 2021" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status: "Reject", phone: "+1 (305) 555-1005", balance: fCurrency(860), created: "Sep 25, 2021" },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status: "Lead", phone: "+1 (305) 555-1005", balance: fCurrency(860), created: "Sep 25, 2021" },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 150, status: "Lead", phone: "+1 (305) 555-1005", balance: fCurrency(860), created: "Sep 25, 2021" },
  { id: 6, lastName: 'Melisandre', firstName: 'Daenerys', age: 150, status: "Active", phone: "+1 (305) 555-1005", balance: fCurrency(860), created: "Sep 25, 2021" },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: "Active", phone: "+1 (305) 555-1005", balance: fCurrency(860), created: "Sep 25, 2021" },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status: "Active", phone: "+1 (305) 555-1005", balance: fCurrency(860), created: "Sep 25, 2021" },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: "Active", phone: "+1 (305) 555-1005", balance: fCurrency(860), created: "Sep 25, 2021" },
];

export default function CustomersTable() {
  const [filterName, setFilterName] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('lastName');

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
      return filter(array, (_user) => (_user.lastName + _user.firstName).toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
  }

  const handleFilterByName = (event) => {
      setFilterName(event.target.value);
  };
  const filteredUsers = applySortFilter(rows, getComparator(order, orderBy), filterName);

  return (
    <Card>
      <CustomerTableToolbar
        numSelected={selected.length}
        filterName={filterName}
        onFilterName={handleFilterByName}
      />
      <Box sx={{ p: 3, pb: 1, height: 570 }} dir="ltr">
        <DataGrid
          rows={filteredUsers}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          sx={{border: 0}}
        />
      </Box>
    </Card>
  );
}
