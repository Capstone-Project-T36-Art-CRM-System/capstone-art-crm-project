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
  IconButton,
  MenuItem,
} from '@mui/material';

// Components Import
import Iconify from '../../../../../components/Iconify';
import MenuPopover from '../../../../../components/MenuPopover';

// Components Import
import Label from '../../../../../components/Label';
import { getEventbyId } from '../../../../../mock_data/events';
import { markUsed } from '../../../../../mock_data/tickets';


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

                <TableCell><MoreMenuButton ticketId={row.id}/></TableCell>
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


function MoreMenuButton({ticketId}) {
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
      <IconButton size="large" onClick={handleOpen}>
        <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
      </IconButton>

      <MenuPopover
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
        <MenuItem  onClick={() => {
              markUsed(ticketId)
              handleClose()
            }}>
          <Iconify icon={'eva:edit-fill'} sx={{ ...ICON }} 
            />
          Mark used
        </MenuItem>
      </MenuPopover>
    </>
  );
}