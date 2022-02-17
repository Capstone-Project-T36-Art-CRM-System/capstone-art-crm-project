import PropTypes from 'prop-types';
import { useEffect } from 'react';

// React Routing
import { Link as RouterLink, useLocation } from 'react-router-dom';

// Material UI
import { styled } from '@mui/material/styles';
import { Box, Drawer } from '@mui/material';

// Shared Components Import
import LogoType from '../../components/LogoType';
import NavSection from '../../components/NavSection';
import { MHidden } from '../../components/MHidden';

import sidebarConfig from './SidebarConfig';


// Styling
const DRAWER_WIDTH = 241;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  }
}));


// Props
DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Box sx={{ height: '100%' }}>
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to="/dashboard" sx={{ display: 'inline-flex', textDecoration: 'none' }}>
          <LogoType />
        </Box>
      </Box>

      <NavSection navConfig={sidebarConfig} />
      
    </Box>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { 
              width: DRAWER_WIDTH,
              bgcolor: 'background.default' 
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              backgroundColor: '#F4F3F8',
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}