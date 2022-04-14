import { useState } from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
  TableContainer,
  TablePagination,
  Dialog,
  DialogTitle,
  Stack,
  CardHeader,
  Card, 
  Button,
  Box
} from '@mui/material';

// Components Import
import Iconify from '../../../../../components/Iconify';
import Label from '../../../../../components/Label';

// Section Import
import NewEmployeeForm from './NewEmployeeForm';

// MOCK DATA
import { getScheduleByEventId } from '../../../../../mock_data/schedule';
import { format } from 'date-fns';
import { getEmployeebyId } from '../../../../../mock_data/employees';


export default function S1cheduleList() {
  const [scheduleList, setScheduleList] = useState(getScheduleByEventId(1));
  const [page, setPage] = useState(0);

  return (
    <Card>
      <CardHeader title="Schedule" sx={{ mb: 3 }} action={
        <EmployeeDialog>
          <Button size="small" startIcon={<Iconify icon={'eva:plus-fill'} />}>
            Schedule event
          </Button>
        </EmployeeDialog>}
      />

      <TableContainer sx={{p: 1}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Start</TableCell>
              <TableCell>End</TableCell>
              <TableCell>Instructor</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduleList.slice(page * 5, page * 5 + 5).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{format(new Date(row?.start), 'p, dd MMM yyyy')}</TableCell>
                <TableCell>{format(new Date(row?.end), 'p, dd MMM yyyy')}</TableCell>

                <TableCell>{getEmployeebyId(row?.instructorId)?.name || "Not Assigned"}</TableCell>

                <TableCell align="right">
                  <EmployeeDialog employeeId={row.id} />
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,]}
        component="div"
        count={scheduleList.length}
        rowsPerPage={5}
        page={page}
        onPageChange={(e, page) => setPage(page)}
      />
    </Card>
  );
}

// Props
EmployeeDialog.propTypes = {
  employeeId: PropTypes.number,
  children: PropTypes.node,
};

function EmployeeDialog({ employeeId, children }) {
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

      <Dialog open={Boolean(open)} fullWidth maxWidth="xs" onCancel={handleClose}>
        <DialogTitle>{!employeeId ? 'Add Employee' : 'Update Employee'}</DialogTitle>
        <Stack spacing={3} sx={{ p: 3, pb: 0 }}>

          <NewEmployeeForm onCloseDialog={handleClose} employeeId={employeeId}  />

        </Stack>
      </Dialog>
    </>
  );
}

