import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="https://cdn.shopify.com/s/files/1/0516/3279/9935/products/graffitiscroogecanvasprint_600x.jpg?v=1628773783"
          alt="scrooge mcduck"
        />
        <CardContent>
          <Typography variant="h5" component="h5">
          Scrooge McDuck
          </Typography>
          <Typography variant="h6" component="h6">
            $320.00
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Scrooge McDuck is a cartoon character created in 1947 by Carl Barks for The Walt Disney Company.
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
