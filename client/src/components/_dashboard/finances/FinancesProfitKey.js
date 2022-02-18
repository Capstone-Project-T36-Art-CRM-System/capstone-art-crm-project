// Material UI
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// Utils
import { fCurrency } from '../../../utils/formatNumber';

// Styling Components
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  padding: theme.spacing(3.5, 3),
  color: '#265114',
  backgroundColor: '#F8FEEF',
  borderRadius: 10,
}));

export default function FinancesProfitKey() {
  return (
    <RootStyle>
      <Typography variant="subtitle3">
        Profit
      </Typography>
      <Typography variant="h2">{fCurrency(10395)}</Typography>
    </RootStyle>
  );
}