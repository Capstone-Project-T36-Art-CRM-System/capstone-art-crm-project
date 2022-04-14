import { useState } from 'react';

// Material UI
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';

// React Routing
import { Link as RouterLink } from 'react-router-dom';

// Components Import
import Iconify from '../../../../../components/Iconify';

// MOCK DATA
import { format } from 'date-fns';
import { CustomerListHead } from '../../../customer/list';
import { getSchedule } from '../../../../../mock_data/schedule';
import { getEmployeebyId } from '../../../../../mock_data/employees';

export default function ScheduleList() {
    const [scheduleList, setScheduleList] = useState(getSchedule());
    const [page, setPage] = useState(0);

  const TABLE_HEAD = [
    { id: 'start', label: 'Start', alignRight: false },
    { id: 'end', label: 'End', alignRight: false },
    { id: 'instructor', label: 'Instructor', alignRight: false },
    { id: '' },
  ];

  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('last_scheduled');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const filteredSchedule = applySortFilter(scheduleList, getComparator(order, orderBy));

  return (
    <>
      <TableContainer>
        <Table>
            <CustomerListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                onRequestSort={handleRequestSort}
            />  
          <TableBody>
            {filteredSchedule.slice(page * 5, page * 5 + 5).map((row) => (
              <TableRow key={row?.id} hover>
                
                <TableCell>{format(new Date(row?.start), 'p, dd MMM yyyy')}</TableCell>

                <TableCell>{format(new Date(row?.end), 'p, dd MMM yyyy')}</TableCell>

                <TableCell>{getEmployeebyId(row?.instructorId)?.name || "Not Assigned"}</TableCell>

                <TableCell align="right">
                  <MoreMenuButton eventId={row?.id}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,]}
        component="div"
        count={filteredSchedule.length}
        rowsPerPage={5}
        page={page}
        onPageChange={(e, page) => setPage(page)}
      />
    </>
  );
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
}
  
function getComparator(order, orderBy) {
    return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}





function MoreMenuButton({eventId}) {
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
      <IconButton size="large" component={RouterLink} to={`/dashboard/event/${eventId}`}>
        <Iconify icon={'eva:eye-fill'} width={20} height={20} />
      </IconButton>

      {/* <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        arrow="right-top"
        sx={{
          mt: -0.5,
          width: 160,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <MenuItem>
          <Iconify icon={'eva:download-fill'} sx={{ ...ICON }} />
          Download
        </MenuItem>

        <MenuItem>
          <Iconify icon={'eva:printer-fill'} sx={{ ...ICON }} />
          Print
        </MenuItem>

        <MenuItem>
          <Iconify icon={'eva:share-fill'} sx={{ ...ICON }} />
          Share
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ ...ICON }} />
          Delete
        </MenuItem>
      </MenuPopover> */}
    </>
  );
}
