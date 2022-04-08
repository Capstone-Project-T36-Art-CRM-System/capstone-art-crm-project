import { capitalCase } from 'change-case';
import { useState } from 'react';

// Material UI
import { Container, Tab, Box, Tabs, Stack, Typography } from '@mui/material';

// Page Components Import
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

// Page Sections Import
import {
    CompanyDetails,
    CompanyFinances,
    CompanyEmployees,
} from '../../sections/_dashboard/company';


export default function Company() {
  const [currentTab, setCurrentTab] = useState('company_details');

  const ACCOUNT_TABS = [
    {
        value: 'company_details',
        icon: <Iconify icon={'ic:round-receipt'} width={20} height={20} />,
        component: <CompanyDetails />,
    },
    {
        value: 'finances',
        icon: <Iconify icon={'eva:share-fill'} width={20} height={20} />,
        component: <CompanyFinances />,
    },
    {
        value: 'employees',
        icon: <Iconify icon={'eva:share-fill'} width={20} height={20} />,
        component: <CompanyEmployees />,
    },
  ];

  return (
    <Page title={`Company`}>
        <Container maxWidth='xl'>

            {/* Page Title */}
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
                Company
            </Typography>
            </Stack>
            {/* Page Title End*/}
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
        </Container>
    </Page>
  );
}
