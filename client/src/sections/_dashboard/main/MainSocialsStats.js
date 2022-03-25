import PropTypes from 'prop-types';

// Material UI
import { Box, Grid, Card, Paper, Typography, CardHeader, CardContent } from '@mui/material';

// Components Import
import Iconify from '../../../components/Iconify'


const SOCIALS = [
  {
    name: 'Facebook',
    value: '1 232',
    icon: <Iconify icon={'eva:facebook-fill'}  color="#1877F2" width={32} height={32} />
  },
  {
    name: 'Instagram',
    value: '12 332',
    icon: <Iconify icon={'eva:instagram-fill'}  color="#DF3E30" width={32} height={32} />
  },
  {
    name: 'Website Visits',
    value: '2 634',
    icon: <Iconify icon={'eva:browser-fill'}  color="#006097" width={32} height={32} />
  },
  {
    name: 'YouTube',
    value: '8 231',
    icon: <Iconify icon={'eva:youtube-fill'}  color="#1C9CEA" width={32} height={32} />
  }
];

// ----------------------------------------------------------------------

SiteItem.propTypes = {
  site: PropTypes.object
};

function SiteItem({ site }) {
  const { icon, value, name } = site;

  return (
    <Grid item xs={6}>
      <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
        <Box sx={{ mb: 0.5 }}>{icon}</Box>
        <Typography variant="h6">{value}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default function MainSocialsStats() {
  return (
    <Card>
      <CardHeader title="Sosials Statistic" />
      <CardContent>
        <Grid container spacing={2}>
          {SOCIALS.map((site) => (
            <SiteItem key={site.name} site={site} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}