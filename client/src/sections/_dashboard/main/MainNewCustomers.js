// Material UI
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getCustomerList } from '../../../mock_data/customers';
import { getTime } from 'date-fns';

// Styling Components
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  padding: theme.spacing(3.5, 3),
  color: '#041571',
  backgroundColor: '#F2F5FE',
  borderRadius: 10,
}));

export default function MainNewCustomers() {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    getCustomerList()
    .then((data) => setCustomerList(data.docs.map((doc) => ({...doc.data(), id: doc.id })).filter(customer => customer.created > getTime(new Date() - 7))))
    .catch((error) => console.log("Firebase Error: ", error.message))
  }, []);

  return (
    <RootStyle>
      <Typography variant="subtitle3">
        New customers
      </Typography>
      <Typography variant="h2">{customerList.length}</Typography>
    </RootStyle>
  );
}