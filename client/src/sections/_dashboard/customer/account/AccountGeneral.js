import { format } from 'date-fns';
import { sentenceCase } from 'change-case';

// Material UI
import { Box, Button, Card, Stack, Typography } from '@mui/material';

// Routing
import { Link as RouterLink } from 'react-router-dom';

// Components Import
import Label from '../../../../components/Label';
import { deleteCustomer } from '../../../../mock_data/customers';


export default function AccountGeneral({customerSelected}) {
  const { id, name, phone, email, status, note, birthDate, gender  } = customerSelected

  return (
    <Stack spacing={3}>
      <Card sx={{ p: 3 }}>
        <Typography variant="h4" mb={5}>{name}</Typography>

        <Stack direction='row' justifyContent='space-between'>
          <Box>
            <Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
              Gender
            </Typography>
            <Typography variant="h5" fontWeight={400}>{gender}</Typography>
          </Box>
          <Box>
            <Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
              Status
            </Typography>
            <Label variant='ghost' sx={{mt: 1, mb: 2}} color={(status === 'rejected' && 'error') || 'success'}>
              {sentenceCase(status)}
            </Label>
          </Box>
        </Stack>
      </Card>
      <Card sx={{ p: 3 }}>
        {birthDate && <><Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
          Date of Birth
        </Typography>
        <Typography variant="body2" mb={2} fontWeight={400}>{format(birthDate, 'dd MMM, yyyy')}</Typography></>}

        {phone && <><Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
          Phone
        </Typography>
        <Typography variant="body2" mb={2} fontWeight={400}>{phone}</Typography></>}

        {email && <><Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
          Email
        </Typography>
        <Typography variant="body2" mb={2} fontWeight={400}>{email}</Typography></>}

        {note && <><Typography variant="overline" sx={{ display: 'block', color: 'text.secondary' }}>
          Note
        </Typography>
        <Typography variant="body2" fontWeight={400}>{note}</Typography></>}
        
        <Stack direction='row' mt={4}>
          <Button size="small" component={RouterLink} to={`/dashboard/customer/${id}/edit`} variant="outlined" sx={{ mr: 1 }}>
            Edit
          </Button>
          <Button size="small" color="inherit" variant="outlined" onClick={() => deleteCustomer(id)} component={RouterLink} to={`/dashboard/customer/list`}>
            Delete
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
}
