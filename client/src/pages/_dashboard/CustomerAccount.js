import { capitalCase } from 'change-case';
import { useState } from 'react';

// Material UI
import { Container, Tab, Box, Tabs, Stack, Typography, Grid } from '@mui/material';

// Routing
import { useParams } from 'react-router-dom';

// Page Components Import
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

// Page Sections Import
import {
  AccountGeneral,
  AccountPayments,
  AccountSocialLinks,
} from '../../sections/_dashboard/customer/account';

// MOCK DATA
import { _userAbout } from '../../_mock';

// MOCK DATA
import { getCustomerbyId } from '../../mock_data/customers';


export default function CustomerAccount() {
  const { customerId } = useParams();
  const [customerSelected, setCustomerSelected] = useState(getCustomerbyId(customerId));
  const [currentTab, setCurrentTab] = useState('payments');

  const ACCOUNT_TABS = [
    {
      value: 'payments',
      icon: <Iconify icon={'ic:round-receipt'} width={20} height={20} />,
      component: <AccountPayments customerId={customerSelected.customerId} />,
    },
    {
      value: 'social_links',
      icon: <Iconify icon={'eva:share-fill'} width={20} height={20} />,
      component: <AccountSocialLinks myProfile={_userAbout} />,
    },
  ];

  return (
    <Page title="Customer Account">
      <Container maxWidth='lg'>

        {/* Page Title */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
              Customers – {customerSelected.name}
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
