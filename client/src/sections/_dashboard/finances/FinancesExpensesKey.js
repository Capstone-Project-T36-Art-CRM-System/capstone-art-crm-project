// Material UI
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// Utils
import { fCurrency } from '../../../utils/formatNumber';

// Styling Components
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  padding: theme.spacing(3.5, 3),
  color: '#7C200F',
  backgroundColor: '#FDF2EA',
  borderRadius: 10,
}));

export default function FinancesExpenseKey() {
  return (
    <RootStyle>
      <Typography variant="subtitle3">
        Expenses
      </Typography>
      <Typography variant="h2">{fCurrency(8370)}</Typography>
    </RootStyle>
  );
}