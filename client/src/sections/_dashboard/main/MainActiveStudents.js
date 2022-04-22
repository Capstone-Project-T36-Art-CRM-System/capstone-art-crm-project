// Material UI
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getCustomerList } from '../../../mock_data/customers';

// Styling Components
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  padding: theme.spacing(3.5, 3),
  color: '#265114',
  backgroundColor: '#F8FEEF',
  borderRadius: 10,
}));

export default function MainActiveStudents() {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    getCustomerList()
    .then((data) => setCustomerList(data.docs.map((doc) => ({...doc.data(), id: doc.id })).filter(customer => customer.status === 'active')))
    .catch((error) => console.log("Firebase Error: ", error.message))
  }, []);

  return (
    <RootStyle>
      <Typography variant="subtitle3">
        Active customers
      </Typography>
      <Typography variant="h2">{customerList.sort(customer => customer.status === 'active').length}</Typography>
    </RootStyle>
  );
}