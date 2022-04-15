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
import { getEventbyId } from '../../../../../mock_data/events';


export default function AccountTicketList({ ticketList, setOpen }) {
  const [page, setPage] = useState(0);

  return (
    <>
      <TableContainer sx={{p: 1}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Event</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Expiration date</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {ticketList?.sort((a,b) => a.expDate - b.expDate && b.expDate).slice(page * 5, page * 5 + 5).map((row) => (
              <TableRow key={row.id}>

                <TableCell>{getEventbyId(row.eventId).title}</TableCell>

                <TableCell>{format(row.created, 'dd MMM, yyyy')}</TableCell>

                <TableCell align="left">
                    <Label
                    variant='ghost'
                    color={row.isUsed ? 'error' : ((endOfDay(row.expDate) - endOfDay(new Date()) < 0 && 'error') || 'success')}
                    >
                        {row.isUsed ? 'Used' : ((endOfDay(row.expDate) - endOfDay(new Date()) < 0 && 'Expired') || 'Active')}
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