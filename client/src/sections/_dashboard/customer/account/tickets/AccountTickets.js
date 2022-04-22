import { useState } from 'react';

// Material UI
import { Card, CardHeader } from '@mui/material';

// Components Import
import AccountTicketList from './AccountTicketList';
import { getTicketListByCustomerId } from '../../../../../mock_data/tickets';

export default function AccountTickets({ customerSelected }) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <CardHeader title="Tickets" sx={{ mb: 3 }}/>
        <AccountTicketList 
          ticketList={ getTicketListByCustomerId(customerSelected.id)} 
          setOpen={(value) => setOpen(value)}
        />
    </Card>
  );
}
