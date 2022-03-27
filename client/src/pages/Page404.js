// Material UI
import { Box, Button, Typography, Container } from '@mui/material';

// Page Components Import
import Page from '../components/Page';

// React Routing
import { Link as RouterLink } from 'react-router-dom';

export default function Page404() {
  return (
    <Page title="404 Page Not Found">
      <Container maxWidth="xl" sx={{ margin: 'auto', textAlign: 'center' }}>
        {/* Page Title */}
        <Box sx={{ pb: 5 }}>
            <Typography variant="h3">404 Page Not Found</Typography>
        </Box>
        {/* Page Title End*/}

        <Button component={RouterLink} to="/dashboard" size="large" variant="contained" sx={{ display: 'inline-flex', textDecoration: 'none' }}>
          Dashboard
        </Button>
      </Container>
    </Page>
  );
}