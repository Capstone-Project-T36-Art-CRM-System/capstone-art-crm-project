// Material UI
import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material';

// MOCK DATA
import { getTransactionList, getThisWeekTransactionList, getLastWeekTransactionList } from '../../../mock_data/transactions';

import { FinancesTransactionTable, FinancesGraph, EcommerceWidgetSummary } from './finances'


export default function CompanyFinances() {

  const transactionList = getTransactionList()
  const thisWeekTransactionList = getThisWeekTransactionList()
  const lastWeekTransactionList = getLastWeekTransactionList()

  return (
    <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
            <Stack spacing={3}>
                <Card>
                  <FinancesGraph 
                    title="Weekly Finances"
                    />
                </Card>

                <Card>
                  <FinancesTransactionTable 
                    title="Recent Transactions"
                    recordsThisWeek={thisWeekTransactionList.length}
                  />
                </Card>


            </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <EcommerceWidgetSummary
              title="Week Income"
              percent={1 - lastWeekTransactionList.filter((transaction) => transaction.type === 'sales').reduce((sum, cur) => { return sum + cur.amount }, 0) / thisWeekTransactionList.filter((transaction) => transaction.type === 'sales').reduce((sum, cur) => { return sum + cur.amount }, 0) }
              total={thisWeekTransactionList.filter((transaction) => transaction.type === 'sales').reduce((sum, cur) => { return sum + cur.amount }, 0) }
              // chartColor={theme.palette.primary.main}
              chartData={thisWeekTransactionList.filter((transaction) => transaction.type === 'sales').map((transaction) => transaction.amount)}
            />

            <EcommerceWidgetSummary
              title="Week Expence"
              percent={1 - lastWeekTransactionList.filter((transaction) => transaction.type !== 'sales').reduce((sum, cur) => { return sum + cur.amount }, 0) / thisWeekTransactionList.filter((transaction) => transaction.type === 'sales').reduce((sum, cur) => { return sum + cur.amount }, 0) }
              total={thisWeekTransactionList.filter((transaction) => transaction.type !== 'sales').reduce((sum, cur) => { return sum + cur.amount }, 0) }
              // chartColor={theme.palette.primary.main}
              chartData={thisWeekTransactionList.filter((transaction) => transaction.type !== 'sales').map((transaction) => transaction.amount)}
            />
          </Stack>
        </Grid>
    </Grid>
  );
}
