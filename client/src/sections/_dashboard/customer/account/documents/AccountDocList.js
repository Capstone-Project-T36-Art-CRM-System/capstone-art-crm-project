import { useState } from 'react';
import { endOfDay, format } from 'date-fns';

// Material UI
import {
  Table,
  Divider,
  MenuItem,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';

// Components Import
import Iconify from '../../../../../components/Iconify';
import Label from '../../../../../components/Label';
import MenuPopover from '../../../../../components/MenuPopover';


export default function AccountDocList({ docList, setCurrentDoc, setOpen }) {
  const [page, setPage] = useState(0);

  const handleEdit = (currentDoc) => {
    setCurrentDoc(currentDoc);
    setOpen(true);
  }


  const handleDelete = (docId) => {
  };

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
            {docList?.sort((a,b) => a.expDate - b.expDate && b.expDate).slice(page * 5, page * 5 + 5).map((row) => (
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

                <TableCell align="right">
                  <MoreMenuButton onEdit={() => handleEdit(row)} onDelete={() => handleDelete(row)}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,]}
        component="div"
        count={docList?.length}
        rowsPerPage={5}
        page={page}
        onPageChange={(e, page) => setPage(page)}
      />
    </>
  );
}

function MoreMenuButton({ onEdit, onDelete }) {
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
        <MenuItem onClick={() => { handleClose(); onEdit() }}>
          <Iconify icon={'eva:edit-fill'} sx={{ ...ICON }} />
          Edit
        </MenuItem>

        <MenuItem onClick={() => { handleClose(); }}>
          <Iconify icon={'eva:download-fill'} sx={{ ...ICON }} />
          Download
        </MenuItem>

        <MenuItem onClick={() => { handleClose(); }}>
          <Iconify icon={'eva:printer-fill'} sx={{ ...ICON }} />
          Print
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ ...ICON }} />
          Delete
        </MenuItem>
      </MenuPopover>
    </>
  );
}
