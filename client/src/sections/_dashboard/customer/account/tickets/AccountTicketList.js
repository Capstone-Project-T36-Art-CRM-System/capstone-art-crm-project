import { useState } from 'react';
import { endOfDay, format } from 'date-fns';

// Material UI
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TablePagination,
} from '@mui/material';

// Components Import
import Label from '../../../../../components/Label';


export default function AccountTicketList({ ticketList, setOpen }) {
  const [page, setPage] = useState(0);

  return (
    <>
      <TableContainer sx={{p: 1}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Document name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Expiration date</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {ticketList?.sort((a,b) => a.expDate - b.expDate && b.expDate).slice(page * 5, page * 5 + 5).map((row) => (
              <TableRow key={row.title}>

                <TableCell>{row.title}</TableCell>

                <TableCell>{row.type}</TableCell>

                <TableCell align="left">
                    <Label
                    variant='ghost'
                    color={!row.expDate ? 'success' : ((endOfDay(row.expDate) - endOfDay(new Date()) < 0 && 'error') || 'success')}
                    >
                        {!row.expDate ? 'Active' : ((endOfDay(row.expDate) - endOfDay(new Date()) < 0 && 'Exipred') || 'Active')}
                    </Label>
                </TableCell>

                <TableCell>{row.expDate ? format(row.expDate, 'dd MMM, yyyy') : 'Never'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,]}
        component="div"
        count={ticketList?.length}
        rowsPerPage={5}
        page={page}
        onPageChange={(e, page) => setPage(page)}
      />
    </>
  );
}