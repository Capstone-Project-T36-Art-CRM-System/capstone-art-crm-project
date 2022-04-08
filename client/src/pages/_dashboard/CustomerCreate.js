import { useParams, useLocation } from 'react-router-dom';

// Material UI
import { Container, Stack, Typography } from '@mui/material';

// Page Components Import
import Page from '../../components/Page';

// Page Sections Import
import CustomerNewForm from '../../sections/_dashboard/customer/CustomerNewForm';

// MOCK DATA
import { getCustomerbyId } from '../../mock_data/customers';


export default function CustomerCreate() {
  const { pathname } = useLocation();
  const { customerId = '' } = useParams();
  const isEdit = pathname.includes('edit');

  const currentCustomer = getCustomerbyId(customerId);

  return (
    <Page title="User: Create a new user">
      <Container maxWidth='xl'>

        {/* Page Title */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
              Customers – <Typography variant="h4" display="inline" color="text.secondary">{!isEdit ? 'Create Customer' : 'Edit Customer'}</Typography>
          </Typography>
        </Stack>
        {/* Page Title End*/}

        <CustomerNewForm isEdit={isEdit} currentCustomer={currentCustomer} />
      </Container>
    </Page>
  );
}
