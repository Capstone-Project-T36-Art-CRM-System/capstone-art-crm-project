// Material UI
import { Card, Typography } from '@mui/material';

export default function DetailsMainInfo({artworkSelected}) {
    const { description } = artworkSelected

  return (
    <Card sx={{p: 3}}>
        {description && <><Typography variant="overline" gutterBottom sx={{ display: 'block', color: 'text.secondary' }}>
          Description
        </Typography>
        <Typography variant="body2" mb={2} fontWeight={400}>{description}</Typography></>}
    </Card>
  );
}
