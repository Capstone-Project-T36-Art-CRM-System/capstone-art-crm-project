import { capitalCase } from 'change-case';
import { useEffect, useState } from 'react';

// Material UI
import { Container, Tab, Box, Tabs, Stack, Typography, Grid } from '@mui/material';

// Routing
import { useNavigate, useParams } from 'react-router-dom';

// Page Components Import
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

// Page Sections Import
import {
  AccountGeneral,
  AccountPayments,
  AccountTickets
} from '../../sections/_dashboard/customer/account';

// MOCK DATA
import { getCustomerbyId } from '../../mock_data/customers';
import { CircularProgress } from '@material-ui/core';


export default function CustomerAccount() {
  const { customerId } = useParams();
  const [customerSelected, setCustomerSelected] = useState(null);
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('payments');

  useEffect(() => {
    getCustomerbyId(customerId)
    .then((doc) => setCustomerSelected( {...doc.data(), id: doc.id } ))
    .catch((error) => console.log("Firebase Error: ", error.message))
  }, [customerId]);


  const ACCOUNT_TABS = [
    {
      value: 'payments',
      icon: <Iconify icon={'ic:round-receipt'} width={20} height={20} />,
      component: <AccountPayments customerId={customerSelected?.id} />,
    },
    {
      value: 'tickets',
      icon: <Iconify icon={'eva:share-fill'} width={20} height={20} />,
      component: <AccountTickets customerSelected={customerSelected} />,
    },
  ];

  return (
    !customerSelected ? <CircularProgress /> :
    <Page title={`Customers – ${customerSelected?.name}`}>
      <Container maxWidth='xl'>

        {/* Page Title */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
              Customers – <Typography variant="h4" display="inline" color="text.secondary">{customerSelected?.name}</Typography>
          </Typography>
        </Stack>
        {/* Page Title End*/}
        <Grid container spacing={3}>
            <Grid item xs={12} md={3.5}>
                <AccountGeneral customerSelected={customerSelected}/>
            </Grid>
            <Grid item xs={12} md={8.5}>
                <Tabs
                    value={currentTab}
                    scrollButtons="auto"
                    variant="scrollable"
                    allowScrollButtonsMobile
                    onChange={(e, value) => setCurrentTab(value)}
                >
                    {ACCOUNT_TABS.map((tab) => (
                        <Tab disableRipple key={tab.value} label={capitalCase(tab.value)} icon={tab.icon} value={tab.value} />
                    ))}
                </Tabs>

                <Box sx={{ mb: 5 }} />

                {ACCOUNT_TABS.map((tab) => {
                const isMatched = tab.value === currentTab;
                return isMatched && <Box key={tab.value}>{tab.component}</Box>;
                })}
            </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
