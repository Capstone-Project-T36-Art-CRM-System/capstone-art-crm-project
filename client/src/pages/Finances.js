// Material UI
import {Box, Container, Grid, Typography} from '@mui/material';
import '../assets/css/style.css';

// Page Components Import
import Page from '../components/Page';
import {MainClassesComplited, MainFinancesGraph, MainNewCustomers} from '../components/_dashboard/finances/index';
import {DataGrid} from "@mui/x-data-grid";
import * as React from "react";

const columns = [
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'status', headerName: 'Status', width: 70 },
    { field: 'phone', headerName: 'Phone', width: 170 },
    { field: 'balance', headerName: 'Balance', width: 100 },

];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: "Active", phone: "+1 (305) 555-1005", balance: "$860.00", created: "Sep 25, 2021"},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status: "Inactive", phone: "+1 (305) 555-1005", balance: "$860.00", created: "Sep 25, 2021" },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status: "Reject", phone: "+1 (305) 555-1005", balance: "$860.00", created: "Sep 25, 2021" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status: "Lead", phone: "+1 (305) 555-1005", balance: "$860.00", created: "Sep 25, 2021" },
    ];

export default function Finances() {
    const style = {
        marginBottom: 200
    };
    return (
        <Page title="Dashboard | Main">
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