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
import Iconify from '../../../components/Iconify';

// MOCK DATA
import { getEventList } from '../../../mock_data/events';
import { format } from 'date-fns';
import { CustomerListHead } from '../customer/list';

export default function EventInnerList({eventType}) {
    const [eventList, setEventList] = useState(getEventList(eventType || null).map(event => ({
        last_scheduled: event.schedule[event.schedule.length - 1].start,
        events_completed: event.schedule.filter(scheduleItem => scheduleItem.start < new Date()).length,
        events_scheduled: event.schedule.filter(scheduleItem => scheduleItem.start > new Date()).length,
        ...event
    })));
    const [page, setPage] = useState(0);

  const TABLE_HEAD = [
    { id: 'title', label: 'Title', alignRight: false },
    { id: 'last_scheduled', label: 'Last scheduled', alignRight: false },
    { id: 'events_completed', label: 'Events Completed', alignRight: false },
    { id: 'events_scheduled', label: 'Events Scheduled', alignRight: false },
    { id: '' },
  ];

  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('last_scheduled');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const filteredEvents = applySortFilter(eventList, getComparator(order, orderBy));

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
            {filteredEvents.slice(page * 5, page * 5 + 5).map((row) => (
              <TableRow key={row.eventId} hover>

                <TableCell>{row.title}</TableCell>
                
                <TableCell>{format(new Date(row.last_scheduled), 'p, dd MMM yyyy')}</TableCell>

                <TableCell>{row.events_completed}</TableCell>

                <TableCell>{row.events_scheduled}</TableCell>

                <TableCell align="right">
                  <MoreMenuButton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,]}
        component="div"
        count={eventList.length}
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
      <IconButton size="large" component={RouterLink} to={`/${eventId}`}>
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
