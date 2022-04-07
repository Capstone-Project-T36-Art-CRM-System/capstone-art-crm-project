import { useState } from 'react';
import { sentenceCase } from 'change-case';

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
} from '@mui/material';

// React Routing
import { Link as RouterLink } from 'react-router-dom';

// Components Import
import Iconify from '../../../../components/Iconify';
import Label from '../../../../components/Iconify';

// MOCK DATA
import { getEmployeeList } from '../../../../mock_data/employees';
import NewEmployeeForm from './NewEmployeeForm';


export default function EmployeeList({customerId}) {
  const [employeeList, setEmployeeList] = useState(getEmployeeList());
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(0);

  return (
    <>
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
                    color={(row.status === 'fired' && 'error') || 'success'}
                  >
                    {sentenceCase(row.status)}
                  </Label>
                </TableCell>

                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.email}</TableCell>

                <TableCell align="right">
                  <IconButton size="large" onClick={() => {setCurrentEmployee(row); setIsOpen(true)}}>
                    <Iconify icon={'eva:edit-fill'} width={20} height={20} />
                  </IconButton>
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

      <DialogNewEmployee currentEmployee={currentEmployee} isOpen={isOpen} onCancel={() => {setIsOpen(false); setCurrentEmployee(null)}} />
    </>
  );
}


function DialogNewEmployee({currentEmployee, isOpen, onCancel }) {

  return (
    <Dialog open={isOpen} fullWidth maxWidth="xs" onCancel={onCancel}>
      <DialogTitle>{!currentEmployee ? 'Add Employee' : 'Update Employee'}</DialogTitle>
      <Stack spacing={3} sx={{ p: 3, pb: 0 }}>

        <NewEmployeeForm onCloseDialog={onCancel} currentEmployee={currentEmployee}  />

      </Stack>
    </Dialog>
  );
}
