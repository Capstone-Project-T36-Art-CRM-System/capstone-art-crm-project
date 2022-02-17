// Material UI
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// Styling Components
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  padding: theme.spacing(3.5, 3),
  color: '#041571',
  backgroundColor: '#F2F5FE',
  borderRadius: 10,
    marginBottom: 20,
}));

export default function MainNewCustomers() {
  return (
    <RootStyle>
      <Typography variant="subtitle3">
        Expenditure
      </Typography>
      <Typography variant="h2">32</Typography>
    </RootStyle>
  );
}