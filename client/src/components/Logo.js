import PropTypes from 'prop-types';

// Material UI
import { Box } from '@mui/material';

// Props
Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />;
}