import { merge } from 'lodash';

import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

// Material UI
import { Card, CardHeader, Box } from '@mui/material';

import { BaseOptionChart } from '../../charts';

const CHART_DATA = [
  {
    name: 'Income',
    type: 'bar',
    data: [1250, 3500, 1450, 2000, 1000, 2900]
  },
  {
    name: 'Loss',
    type: 'bar',
    data: [1000, 1400, 600, 1400, 900, 3000]
  },
  {
    name: 'Profit',
    type: 'area',
    data: [250, 2100, 850, 600, 100, -100]
  }
];

export default function MainFinancesGraph() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 0, 3] },
    plotOptions: { bar: { columnWidth: '20%', borderRadius: 4 } },
    fill: { type: ['solid', 'solid', 'gradient'] },
    // labels: [
    //     '02/14/2022',
    //     '02/15/2022',
    //     '02/16/2022',
    //     '02/17/2022',
    //     '02/18/2022',
    //     '02/19/2022',
    // ],
    xaxis: { 
        type: 'category',
        categories: [
            '14 Feb',
            '15 Feb',
            '16 Feb',
            '17 Feb',
            '18 Feb',
            '19 Feb',
        ],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `$${y.toFixed(0)}`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Weekly Finances" subheader="(-13%) than last week" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}