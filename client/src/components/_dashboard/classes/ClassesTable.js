import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'status', headerName: 'Status', width: 70 },
  { field: 'phone', headerName: 'Phone', width: 170 },
  { field: 'balance', headerName: 'Balance', width: 100 },
  { field: 'created', headerName: 'Created', width: 120 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },

];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: "Active", phone: "+1 (305) 555-1005", balance: "$860.00", created: "Sep 25, 2021"},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status: "Inactive", phone: "+1 (305) 555-1005", balance: "$860.00", created: "Sep 25, 2021" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status: "Reject", phone: "+1 (305) 555-1005", balance: "$860.00", created: "Sep 25, 2021" },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status: "Lead", phone: "+1 (305) 555-1005", balance: "$860.00", created: "Sep 25, 2021" },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 150, status: "Lead", phone: "+1 (305) 555-1005", balance: "$860.00", created: "Sep 25, 2021" },
  { id: 6, lastName: 'Melisandre', firstName: 'Daenerys', age: 150, status: "Active", phone: "+1 (305) 555-1005", balance: "$860.00", created: "Sep 25, 2021" },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: "Active", phone: "+1 (305) 555-1005", balance: "$860.00", created: "Sep 25, 2021" },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status: "Active", phone: "+1 (305) 555-1005", balance: "$860.00", created: "Sep 25, 2021" },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: "Active", phone: "+1 (305) 555-1005", balance: "$860.00", created: "Sep 25, 2021" },
];

export default function ClassesTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
