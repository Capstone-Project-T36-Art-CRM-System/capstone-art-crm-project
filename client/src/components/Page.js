import { forwardRef } from 'react';
import PropTypes from 'prop-types';

// React Helmet
import { Helmet } from 'react-helmet-async';

// Material UI
import { Box } from '@mui/material';

const Page = forwardRef(({ children, title = '', ...other }, ref) => (
  <Box ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
));

// Prop Types
Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;