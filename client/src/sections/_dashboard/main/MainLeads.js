// Material UI
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// Styling Components
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  padding: theme.spacing(3.5, 3),
  color: '#7C200F',
  backgroundColor: '#FDF2EA',
  borderRadius: 10,
}));

export default function MainLeads() {
  return (
    <RootStyle>
      <Typography variant="subtitle3">
        Leads
      </Typography>
      <Typography variant="h2">23</Typography>
    </RootStyle>
  );
}