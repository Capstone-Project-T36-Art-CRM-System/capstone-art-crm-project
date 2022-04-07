// Utils
import { format } from 'date-fns';
import { fCurrency } from '../../../../utils/formatNumber';

// Material UI
import { Card, CardHeader, Box, Typography } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid";

// MOCK DATA
import { getTransactionList } from '../../../../mock_data/transactions';
import { capitalCase } from 'change-case';

// TABLE DATA
const columns = [
  {
    field: 'note',
    headerName: 'Note',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 2,
  },
  { field: 'type', 
    headerName: 'Type', 
    flex: 1,
    valueGetter: (params) => capitalCase(params.row.type),
  },
  { 
    field: 'amount', 
    headerName: 'Amount', 
    flex: 0.5,
    renderCell: (params) => (<Typography>{params.row.type === 'sales' ? null : '-'}{fCurrency(params.row.amount)}</Typography>),
  },
  { 
    field: 'date', 
    headerName: 'Date', 
    flex: 1,
    valueGetter: (params) => `${format(new Date(params.row.date), "dd MMM yyyy, p")}`,
  },
];

const rows = getTransactionList().map((transaction) => ({...transaction, id: transaction.transactionId}))

export default function FinancesTransactionTable({ title, recordsThisWeek}) {
  return (
    <Card>
      <CardHeader title={title} subheader={`${recordsThisWeek} records for last seven days`} />
      <Box sx={{ p: 3, pb: 1, height: 570 }} dir="ltr">
        {console.log(new Date() - 1)}
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </Card>
  );
}