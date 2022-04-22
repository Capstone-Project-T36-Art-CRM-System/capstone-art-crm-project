// Material UI
import { styled } from '@mui/material/styles';
import { Card, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getArtworkList } from '../../../mock_data/artworks';

// Styling Components
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  padding: theme.spacing(3.5, 3),
  color: '#7C200F',
  backgroundColor: '#FDF2EA',
  borderRadius: 10,
}));

export default function MainLeads() {
  const [artworkList, setArtworkList] = useState([]);

  useEffect(() => {
    getArtworkList()
    .then((data) => setArtworkList(data.docs.map((doc) => ({...doc.data(), id: doc.id }))))
    .catch((error) => console.log("Firebase Error: ", error.message))
  }, []);

  return (
    !artworkList ? <CircularProgress /> 
    :
    <RootStyle>
      <Typography variant="subtitle3">
        Artworks
      </Typography>
      <Typography variant="h2">{artworkList.length}</Typography>
    </RootStyle>
  );
}