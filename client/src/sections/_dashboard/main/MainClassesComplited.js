// Material UI
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import { getSchedule } from '../../../mock_data/schedule';

// Styling Components
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  padding: theme.spacing(3.5, 3),
  color: '#1F0E5D',
  backgroundColor: '#F8F1FD',
  borderRadius: 10,

}));

export default function MainClassesComplited() {
  return (
    <RootStyle>
      <Typography variant="subtitle3">
        Classes complited
      </Typography>
      <Typography variant="h2">{getSchedule().length}</Typography>
    </RootStyle>
  );
}