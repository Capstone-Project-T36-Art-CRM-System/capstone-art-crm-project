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
import Iconify from '../../../../components/Iconify';
import Label from '../../../../components/Label';

// Section Import
import NewEmployeeForm from './NewEmployeeForm';

// MOCK DATA
import { getEmployeeList } from '../../../../mock_data/employees';


export default function EmployeeList() {
  const [employeeList, setEmployeeList] = useState(getEmployeeList());
  const [page, setPage] = useState(0);

  return (
    <Card>
      <CardHeader title="Employees" sx={{ mb: 3 }} action={
        <EmployeeDialog>
          <Button size="small" startIcon={<Iconify icon={'eva:plus-fill'} />}>
            Add new employee
          </Button>
        </EmployeeDialog>}
      />

      <TableContainer sx={{p: 1}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeList.slice(page * 5, page * 5 + 5).map((row) => (
              <TableRow key={row.employeeId}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.position}</TableCell>

                <TableCell align="left">
                  <Label
                    variant='ghost'
                    color={row.isFired ? 'error' : 'success'}
                  >
                    {row.isFired ? 'Fired' : 'Active'}
                  </Label>
                </TableCell>

                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.email}</TableCell>

                <TableCell align="right">
                  <EmployeeDialog employeeId={row.employeeId} />
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,]}
        component="div"
        count={employeeList.length}
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

