import * as React from "react";

// Material UI
import { Box, Container, Grid, Typography } from '@mui/material';

// Page Components Import
import Page from '../components/Page';
import { FinancesProfitKey, FinancesIncomeKey, FinancesExpensesKey, FinancesGraph, FinancesTransactionTable } from '../components/_dashboard/finances/index';

export default function Finances() {
    return (
        <Page title="Dashboard | Finances">
            <Container maxWidth="xl">
                {/* Page Title */}
                <Box sx={{pb: 5}}>
                    <Typography variant="h4">Finances</Typography>
                </Box>
                {/* Page Title End*/}

                {/* Page Content */}
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={8}>
                        <FinancesGraph />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <FinancesIncomeKey/>
                        <FinancesExpensesKey />
                        <FinancesProfitKey/>
                    </Grid>
                    <Grid item xs={12}>
                        <FinancesTransactionTable />
                    </Grid>
                </Grid>
                {/* Page Content End */}
            </Container>
        </Page>
    );
}