// Material UI
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// Styling Components
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  padding: theme.spacing(3.5, 3),
  color: '#265114',
  backgroundColor: '#F8FEEF',
  borderRadius: 10,
}));

export default function MainActiveStudents() {
  return (
    <RootStyle>
      <Typography variant="subtitle3">
        Active students
      </Typography>
      <Typography variant="h2">156</Typography>
    </RootStyle>
  );
}