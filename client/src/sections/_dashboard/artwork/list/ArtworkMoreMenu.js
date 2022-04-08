import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Material UI
import { MenuItem, IconButton } from '@mui/material';

// Components Import
import Iconify from '../../../../components/Iconify';
import MenuPopover from '../../../../components/MenuPopover';

// Props
ArtworkMoreMenu.propTypes = {
  userName: PropTypes.string,
};

export default function ArtworkMoreMenu({ artworkId }) {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };

  return (
    <>
      <IconButton component={RouterLink} to={`/dashboard/artwork/${artworkId}`}>
        <Iconify icon={'eva:eye-fill'} width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        arrow="right-top"
        sx={{
          mt: -1,
          width: 160,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <MenuItem component={RouterLink} to={`/dashboard/artwork/${artworkId}`}>
          <Iconify icon={'eva:eye-fill'} sx={{ ...ICON }} />
          Details
        </MenuItem>

      </MenuPopover>
    </>
  );
}
