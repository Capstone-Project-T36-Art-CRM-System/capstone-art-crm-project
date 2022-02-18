import * as React from "react";

// Material UI
import { Box, Container, Grid, Typography } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid";
import '../assets/css/style.css';

// Page Components Import
import Page from '../components/Page';
import { MainClassesComplited, MainFinancesGraph, MainNewCustomers } from '../components/_dashboard/finances/index';

const columns = [
    {
        field: 'expanseName',
        headerName: 'Expense',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 270,
        valueGetter: (params) =>
            `${params.row.expense || ''}`,
    },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'amount', headerName: 'Amount $', width: 95 },
    { field: 'dateOfExpense', headerName: 'Date', width: 120 },
];

const rows = [
    { id: 1, expense: 'Flowers and hearts for St. Valentines day', category: 'Operating expenses', amount: 90, dateOfExpense: "Feb 14, 2022"},
    { id: 2, expense: 'Office supplies', category: 'Operating expenses', amount: 185, dateOfExpense: "Feb 14, 2022"},
    { id: 3, expense: 'Detergents for cleaning', category: 'Operating expenses', amount: 30, dateOfExpense: "Feb 15, 2022"},
    { id: 4, expense: 'Canvas and paint', category: 'Operating expenses', amount: 200, dateOfExpense: "Feb 16, 2022"},
    { id: 5, expense: 'Postage', category: 'Operating expenses', amount: 24, dateOfExpense: "Feb 17, 2022"},
    { id: 6, expense: 'Drinks and snacks', category: 'Operating expenses', amount: 60, dateOfExpense: "Feb 18, 2022"},
    { id: 7, expense: 'Plumbing services', category: 'Operating expenses', amount: 490, dateOfExpense: "Feb 18, 2022"},
    { id: 8, expense: 'Courier services', category: 'Operating expenses', amount: 35, dateOfExpense: "Feb 19, 2022"},
    ];

export default function Finances() {
    return (
        <Page title="Dashboard | Finances">
            <Container maxWidth="xl">
                {/* Page Title */}
                <Box sx={{pb: 5}}>
                    <Typography variant="h3">Finances</Typography>
                </Box>
                {/* Page Title End*/}

                {/* Page Content */}
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={6}>
                        <Grid item xs={6} sm={6} md={12}>
                            <MainClassesComplited/>
                        </Grid>
                        <Grid item xs={6} sm={6} md={12}>
                            <MainNewCustomers/>
                        </Grid>
                        <Grid item xs={6} sm={6} md={12}>
                            <div style={{height: 320, width: '100%'}}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={10}
                                    rowsPerPageOptions={[5]}
                                    checkboxSelection
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6} lg={6}>
                        <MainFinancesGraph/>
                    </Grid>


                    {/* <Grid item xs={12} md={6} lg={4}>
                    <MainSocialsStats />
                </Grid> */}

                </Grid>
                {/* Page Content End */}
            </Container>
        </Page>
    );
}