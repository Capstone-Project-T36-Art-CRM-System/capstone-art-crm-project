// Material UI
import { Box, Button, Typography, Container } from '@mui/material';

// Page Components Import
import Page from '../components/Page';

export default function Page404() {
  return (
    <Page title="404 Page Not Found">
      <Container maxWidth="xl" sx={{ margin: 'auto', textAlign: 'center' }}>
        {/* Page Title */}
        <Box sx={{ pb: 5 }}>
            <Typography variant="h3">404 Page Not Found</Typography>
        </Box>
        {/* Page Title End*/}

        <Button component='a' href="/dashboard" size="large" variant="contained">
          Dashboard
        </Button>
      </Container>
    </Page>
  );
}