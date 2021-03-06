import { useParams, useLocation } from 'react-router-dom';

// Material UI
import { Container, Stack, Typography } from '@mui/material';

// Page Components Import
import Page from '../../components/Page';

// Page Sections Import
import CustomerNewForm from '../../sections/_dashboard/customer/CustomerNewForm';

// MOCK DATA
import { getCustomerbyId } from '../../mock_data/customers';
import { useEffect, useState } from 'react';


export default function CustomerCreate() {
  const { pathname } = useLocation();
  const { customerId = '' } = useParams();
  const isEdit = pathname.includes('edit');

  const [currentCustomer, setCurrentCustomer] = useState(null)

  useEffect(() => {
    !isEdit ? 
    setCurrentCustomer(null)
    :
    getCustomerbyId(customerId)
    .then((doc) => setCurrentCustomer({...doc.data(), id: doc.id}))
    .catch((error) => console.log("Firebase Error: ", error.message))
  }, [customerId, isEdit]);

  return (
    <Page title={`Customers – ${currentCustomer ? currentCustomer?.name + ' – Edit' : 'Create customer'}`}>
      <Container maxWidth='xl'>

        {/* Page Title */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
              Customers – {currentCustomer?.name || null} <Typography variant="h4" display="inline" color="text.secondary">{!isEdit ? 'Create customer' : null}</Typography>
          </Typography>
        </Stack>
        {/* Page Title End*/}

        <CustomerNewForm isEdit={isEdit} currentCustomer={currentCustomer} />
      </Container>
    </Page>
  );
}
