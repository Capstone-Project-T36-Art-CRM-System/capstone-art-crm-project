import { useState } from 'react';

// Material UI
import { Card, CardHeader } from '@mui/material';

// Components Import
import AccountTicketList from './AccountTicketList';

export default function AccountTickets({ customerSelected }) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <CardHeader title="Tickets" sx={{ mb: 3 }}
      />
        <AccountTicketList 
          ticketList={customerSelected?.ticketList} 
          setOpen={(value) => setOpen(value)}
        />
    </Card>
  );
}
