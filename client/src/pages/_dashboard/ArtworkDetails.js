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
  DetailsGeneral,
  DetailsMainInfo
} from '../../sections/_dashboard/artwork/details';

// MOCK DATA
import { getArtworkrbyId } from '../../mock_data/artworks';


export default function ArtworkDetails() {
  const { artworkId } = useParams();
  const [artworkSelected, setArtworkSelected] = useState(getArtworkrbyId(artworkId));
  const [currentTab, setCurrentTab] = useState('main_info');

  const DETAILS_TABS = [
    {
      value: 'main_info',
      icon: <Iconify icon={'ic:round-receipt'} width={20} height={20} />,
      component: <DetailsMainInfo artworkSelected={artworkSelected} />,
    },
    {
      value: 'docs',
      icon: <Iconify icon={'eva:share-fill'} width={20} height={20} />,
    //   component: <AccountSocialLinks myProfile={_userAbout} />,
    },
  ];

  return (
    <Page title={`Artworks – ${artworkSelected?.title}`}>
      <Container maxWidth='lg'>
        {/* Page Title */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
              Artworks – <Typography variant="h4" display="inline" color="text.secondary">{artworkSelected?.title}</Typography>
          </Typography>
        </Stack>
        {/* Page Title End*/}
        <Grid container spacing={3}>
            <Grid item xs={12} md={3.5}>
                <DetailsGeneral artworkSelected={artworkSelected}/>
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
