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
  EventGeneral, EventSchedule,
  
} from '../../sections/_dashboard/event/details';

// MOCK DATA
import { getEventbyId } from '../../mock_data/events';


export default function EventDetails() {
  const { eventId } = useParams();
  const [eventSelected, setEventSelected] = useState(getEventbyId(eventId));
  const [currentTab, setCurrentTab] = useState('schedule');

  const DETAILS_TABS = [
    {
      value: 'schedule',
      icon: <Iconify icon={'ic:round-receipt'} width={20} height={20} />,
      component: <EventSchedule eventId={eventId} />,
    },
    {
      value: 'tickets',
      icon: <Iconify icon={'ic:round-receipt'} width={20} height={20} />,
    //   component: <AccountSocialLinks myProfile={_userAbout} />,
    },
  ];

  return (
    <Page title={`Events – ${eventSelected?.title}`}>
      <Container maxWidth='xl'>
        {/* Page Title */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
              Events – <Typography variant="h4" display="inline" color="text.secondary">{eventSelected?.title}</Typography>
          </Typography>
        </Stack>
        {/* Page Title End*/}
        <Grid container spacing={3}>
            <Grid item xs={12} md={3.5}>
                <EventGeneral eventSelected={eventSelected}/>
            </Grid>
            <Grid item xs={12} md={8.5}>
                <Tabs
                    value={currentTab}
                    scrollButtons="auto"
                    variant="scrollable"
                    allowScrollButtonsMobile
                    onChange={(e, value) => setCurrentTab(value)}
                >
                    {DETAILS_TABS.map((tab) => (
                        <Tab disableRipple key={tab.value} label={capitalCase(tab.value)} icon={tab.icon} value={tab.value} />
                    ))}
                </Tabs>

                <Box sx={{ mb: 5 }} />

                {DETAILS_TABS.map((tab) => {
                const isMatched = tab.value === currentTab;
                return isMatched && <Box key={tab.value}>{tab.component}</Box>;
                })}
            </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
