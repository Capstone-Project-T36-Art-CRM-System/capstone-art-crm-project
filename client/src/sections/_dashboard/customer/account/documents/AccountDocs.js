import { useState } from 'react';

// Material UI
import { Box, Card, Button, Collapse, CardHeader } from '@mui/material';

// Components Import
import AccountDocList from './AccountDocList';
import Iconify from '../../../../../components/Iconify';
import NewDocForm from './NewDocForm';

export default function AccountDocs({ customerSelected }) {
  const [open, setOpen] = useState(false);
  const [currentDoc, setCurrentDoc] = useState(null);

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
          onCloseColapse={() => {setOpen(false); setCurrentDoc(null)}}
          currentDoc={currentDoc}
        />
        
        <AccountDocList 
          docList={customerSelected?.docList} 
          setCurrentDoc={(value) => setCurrentDoc(value)} 
          setOpen={(value) => setOpen(value)}
        />
    </Card>
  );
}

function CollapseNewDocument({isOpen, onCloseColapse, currentDoc}) {
  return (
    <Collapse in={isOpen} sx={{px: 2}}>
      <Box sx={{ padding: 3, mb: 3, borderRadius: 1, bgcolor: 'background.neutral' }}>

        <NewDocForm onCloseColapse={onCloseColapse} currentDoc={currentDoc}  />

      </Box>
    </Collapse>
  );
}
