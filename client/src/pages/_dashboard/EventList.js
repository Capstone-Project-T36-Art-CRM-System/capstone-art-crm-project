import * as React from 'react';

// Material UI
import { Accordion, AccordionDetails, AccordionSummary, Typography, Container, Button, Stack, Card, CardHeader   } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Page Components Import
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

// Page Sections Import
import { EventInnerList } from '../../sections/_dashboard/event';
import { getEventList } from '../../mock_data/events';
import { sentenceCase } from 'change-case';

export default function EventList() {
    const [expanded, setExpanded] = React.useState('class');

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <Page title="Events">
            <Container maxWidth='xl'>
                {/* Page Title */}
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    Events
                </Typography>
                <Button
                    variant="contained"

                    startIcon={ <Iconify icon={'eva:plus-fill'} width={20} height={20} />}
                >
                    Add event
                </Button>
                </Stack>
                <Card>
                {/* Page Title End*/}
                {['class', 'exhibition', 'lecture', 'other'].map(eventType => (
                <Accordion expanded={expanded === eventType} onChange={handleChange(eventType)} sx={{'&.MuiPaper-root': {margin: 0}}}>
                    <AccordionSummary
                    expandIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20} />}
                    >
                    <Typography variant='h6' sx={{ width: '33%', flexShrink: 0, py: 2 }}>
                        {sentenceCase(eventType)}
                    </Typography>
                    </AccordionSummary>

                        <EventInnerList eventType={eventType}/>

                </Accordion>
                ))}
                </Card>
            </Container>
        </Page>
    );
}
