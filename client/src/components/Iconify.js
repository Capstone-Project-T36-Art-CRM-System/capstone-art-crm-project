import PropTypes from 'prop-types';

// Material UI
import { Box } from '@mui/material';

// Iconify
import { Icon } from '@iconify/react';

// Props
Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
};

export default function Iconify({ icon, sx, ...other }) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
