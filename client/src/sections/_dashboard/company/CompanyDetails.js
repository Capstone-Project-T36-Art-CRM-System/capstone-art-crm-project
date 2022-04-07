// Material UI
import { Button, Card, Stack, Typography } from '@mui/material';

// MOCK DATA
import { getCompany } from '../../../mock_data/company';


export default function CompanyDetails() {
    const company = getCompany();

  return (
    <Stack spacing={3}>
      <Card sx={{ p: 3 }}>
        {company.name && <><Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
          Company name
        </Typography>
        <Typography variant="body2" mb={2} fontWeight={400}>{company.name}</Typography></>}
        
        <Stack direction='row' mt={4}>
          <Button size="small" variant="outlined" sx={{ mr: 1 }}>
            Edit
          </Button>
          <Button size="small" color="inherit" variant="outlined">
            Delete
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
}
