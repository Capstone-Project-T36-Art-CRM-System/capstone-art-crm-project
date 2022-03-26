import { useState } from 'react';

// Material UI
import { Box, Card, Button, Typography, Stack, Collapse, TextField, CardHeader } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Components Import
import AccountDocList from './AccountDocList';
import Iconify from '../../../../components/Iconify';

export default function AccountDocs({ customerSelected }) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <CardHeader title="Documents" sx={{ mb: 3 }} action={
        <Box>
          <Button size="small" startIcon={<Iconify icon={'eva:plus-fill'} />} onClick={() => setOpen(!open)}>
            Add new document
          </Button>
        </Box>}
      />
        <CollapseNewDocument 
          isOpen={open}
          onOpen={() => setOpen(!open)}
          onCancel={() => setOpen(false)}
        />
        <AccountDocList docList={customerSelected?.docList}/>
    </Card>
  );
}

function CollapseNewDocument({isOpen, onCancel}) {

  return (
    <Collapse in={isOpen} sx={{px: 2}}>
      <Box
        sx={{
          padding: 3,
          mb: 3,
          borderRadius: 1,
          bgcolor: 'background.neutral',
        }}
      >
        <Stack spacing={3}>
          <Typography variant="subtitle1">Add new document</Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField fullWidth label="Name on card" />

            <TextField fullWidth label="Card number" />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField fullWidth label="Expiration date" placeholder="MM/YY" />

            <TextField fullWidth label="Cvv" />
          </Stack>

          <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
            <Button color="inherit" variant="outlined" onClick={onCancel}>
              Cancel
            </Button>
            <LoadingButton type="submit" variant="contained" onClick={onCancel}>
              Add Document
            </LoadingButton>
          </Stack>
        </Stack>
      </Box>
    </Collapse>
  );
}
