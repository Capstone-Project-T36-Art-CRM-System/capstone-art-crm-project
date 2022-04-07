import { useState } from 'react';

// Material UI
import { Box, Button, Card, CardHeader, Grid, Stack, Typography } from '@mui/material';
import Iconify from '../../../components/Iconify';

// Components Import
import { EmployeeList } from './employees'

// MOCK DATA
import { getEmployeeList } from '../../../mock_data/employees';


export default function CompanyEmployees() {
  const [open, setOpen] = useState(false);

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={12}>
          <Stack spacing={3}>
            <Card>
              <CardHeader title="Employees" sx={{ mb: 3 }} action={
                <Box>
                  <Button size="small" startIcon={<Iconify icon={'eva:plus-fill'} />} onClick={() => setOpen(!open)}>
                    Add new employee
                  </Button>
                </Box>}
              />
              <EmployeeList />

            </Card>
          </Stack>
      </Grid>

      <Grid item xs={12} md={4}>
        <Stack spacing={3}>
        </Stack>
      </Grid>
    </Grid>
  );
}
