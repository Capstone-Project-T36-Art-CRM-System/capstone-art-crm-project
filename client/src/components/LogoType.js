import PropTypes from 'prop-types';

// Material UI
import { Box, Typography } from '@mui/material';

// Props
LogoType.propTypes = {
  sx: PropTypes.object
};

export default function LogoType({ sx }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Box component="img" src="/static/logo.svg" sx={{ width: 32, height: 32, display: 'inline-block', ...sx }} />
            <Typography variant='span' sx={{ color: '#8B8B8B', fontWeight: 'bold', fontSize: '21px', lineHeight: '25px', ml: 1}}>Art Gallery</Typography>
        </Box>
    );
}