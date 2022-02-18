// Material UI
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// Utils
import { fCurrency } from '../../../utils/formatNumber';

// Styling Components
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  padding: theme.spacing(3.5, 3),
  color: '#1F0E5D',
  backgroundColor: '#F8F1FD',
  borderRadius: 10,
}));

export default function FinancesIncomeKey() {
  return (
    <RootStyle>
      <Typography variant="subtitle3">
        Income
      </Typography>
      <Typography variant="h2">{fCurrency(18765)}</Typography>
    </RootStyle>
  );
}