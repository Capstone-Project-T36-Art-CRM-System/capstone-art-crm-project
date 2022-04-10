import PropTypes from 'prop-types';

// Material UI
import { styled } from '@mui/material/styles';
import { Toolbar, Tooltip, IconButton, InputAdornment } from '@mui/material';

// Components
import Iconify from '../../../../components/Iconify';
import InputStyle from '../../../../components/InputStyle';

// Styling
const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));

// Props
CustomerListToolbar.propTypes = {
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

export default function CustomerListToolbar({ filterName, onFilterName }) {

  return (
    <RootStyle>
      <InputStyle
        stretchStart={240}
        value={filterName}
        onChange={(event) => onFilterName(event.target.value)}
        placeholder="Search user..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon={'eva:search-fill'} sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          ),
        }}
      />

      <Tooltip title="Filter list">
        <IconButton>
          <Iconify icon={'ic:round-filter-list'} />
        </IconButton>
      </Tooltip>
    </RootStyle>
  );
}
