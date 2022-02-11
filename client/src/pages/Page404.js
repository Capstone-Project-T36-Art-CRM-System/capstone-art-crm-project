// Material UI
import { Box, Button, Typography, Container } from '@mui/material';

export default function Page404() {
  return (
    // <RootStyle title="404 Page Not Found | Minimal-UI">
      <Container>
        <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            Sorry, page not found!
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL?
            Be sure to check your spelling.
          </Typography>
          <Box
            component="img"
            src="/static/illustrations/illustration_404.svg"
            sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />
          <Button to="/" size="large" variant="contained">
            Go to Home
          </Button>
        </Box>
      </Container>
    // </RootStyle>
  );
}