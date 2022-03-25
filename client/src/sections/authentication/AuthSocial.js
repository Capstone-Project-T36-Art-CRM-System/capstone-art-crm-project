// Material UI
import { Stack, Button, Divider, Typography } from '@mui/material';

// Components Import
import Iconify from '../../components/Iconify'


export default function AuthSocial() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon={'eva:google-fill'}  color="#DF3E30" width={24} height={24} />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}