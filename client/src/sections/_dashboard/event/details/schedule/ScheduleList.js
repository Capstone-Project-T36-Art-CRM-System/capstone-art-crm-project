import { useState } from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  IconButton,
  TableContainer,
  TablePagination,
  Box,
  Dialog,
  DialogTitle,
  Stack,
} from '@mui/material';

// React Routing
import { Link as RouterLink } from 'react-router-dom';

// Components Import
import Iconify from '../../../../../components/Iconify';

// MOCK DATA
import { format } from 'date-fns';
import { CustomerListHead } from '../../../customer/list';
import { getSchedule, getScheduleByEventId } from '../../../../../mock_data/schedule';
import { getEmployeebyId } from '../../../../../mock_data/employees';
import CalendarForm from '../../../calendar/CalendarForm';

export default function ScheduleList({ eventId }) {
    const [scheduleList, setScheduleList] = useState(getScheduleByEventId(eventId));
    const [page, setPage] = useState(0);

  const TABLE_HEAD = [
    { id: 'start', label: 'Start', alignRight: false },
    { id: 'end', label: 'End', alignRight: false },
    { id: 'instructor', label: 'Instructor', alignRight: false },
    { id: '' },
  ];

  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('start');

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
                  <ScheduleDialog scheduleId={row?.id}/>
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





// Props
ScheduleDialog.propTypes = {
  scheduleId: PropTypes.number,
  children: PropTypes.node,
};

function ScheduleDialog({ scheduleId, children }) {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      {children ? 
      <Box onClick={handleOpen}>
        {children}
      </Box>
      :
      <IconButton onClick={handleOpen}>
        <Iconify icon={'eva:edit-fill'} width={20} height={20} />
      </IconButton>
      }

      <Dialog open={Boolean(open)} fullWidth onCancel={handleClose}>
        <DialogTitle>{!scheduleId ? 'Schedule Event' : 'Update Schedule'}</DialogTitle>


            <CalendarForm scheduledEventId={scheduleId} onCancel={handleClose}/>


      </Dialog>
    </>
  );
}
