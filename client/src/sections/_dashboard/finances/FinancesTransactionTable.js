// Utils
import { fCurrency } from '../../../utils/formatNumber';

// Material UI
import { Card, CardHeader, Box } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid";

// TABLE DATA
const columns = [
  {
      field: 'expanseName',
      headerName: 'Expense',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      flex: 2,
      valueGetter: (params) =>
          `${params.row.expense || ''}`,
  },
  { field: 'category', headerName: 'Category', flex: 1 },
  { field: 'amount', headerName: 'Amount', flex: 0.5 },
  { field: 'dateOfExpense', headerName: 'Date', flex: 1 },
];

const rows = [
  { id: 1, expense: 'Flowers and hearts for St. Valentines day', category: 'Operating expenses', amount: fCurrency(90), dateOfExpense: "Feb 14, 2022"},
  { id: 2, expense: 'Office supplies', category: 'Operating expenses', amount: fCurrency(185), dateOfExpense: "Feb 14, 2022"},
  { id: 3, expense: 'Detergents for cleaning', category: 'Operating expenses', amount: fCurrency(30), dateOfExpense: "Feb 15, 2022"},
  { id: 4, expense: 'Canvas and paint', category: 'Operating expenses', amount: fCurrency(200), dateOfExpense: "Feb 16, 2022"},
  { id: 5, expense: 'Postage', category: 'Operating expenses', amount: fCurrency(24), dateOfExpense: "Feb 17, 2022"},
  { id: 6, expense: 'Drinks and snacks', category: 'Operating expenses', amount: fCurrency(60), dateOfExpense: "Feb 18, 2022"},
  { id: 7, expense: 'Plumbing services', category: 'Operating expenses', amount: fCurrency(490), dateOfExpense: "Feb 18, 2022"},
  { id: 8, expense: 'Courier services', category: 'Operating expenses', amount: fCurrency(35), dateOfExpense: "Feb 19, 2022"},
];


export default function FinancesTransactionTable() {
  return (
    <Card>
      <CardHeader title="Recent Transactions" subheader="68 records this week" />
      <Box sx={{ p: 3, pb: 1, height: 570 }} dir="ltr">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Box>
    </Card>
  );
}