import React from 'react';
import { Grid, Paper, Typography, Box, Card, CardContent } from '@mui/material';

const ManagerDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {/* Dashboard Header */}
        <Grid item xs={12}>
          <Typography variant="h4">Welcome, Manager</Typography>
          <Typography variant="subtitle1">{new Date().toLocaleString()}</Typography>
        </Grid>
        
        {/* Quick Stats */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Today's Sales</Typography>
              <Typography variant="h4">$1,200</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Pending Orders</Typography>
              <Typography variant="h4">15</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Low Stock Items</Typography>
              <Typography variant="h4">5</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Order Management */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Order Management</Typography>
            {/* Insert Order Management Component */}
          </Paper>
        </Grid>

        {/* Inventory Alerts */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Inventory Alerts</Typography>
            {/* Insert Inventory Alerts Component */}
          </Paper>
        </Grid>

        {/* Recent Activities */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Recent Activities</Typography>
            {/* Insert Recent Activities Component */}
          </Paper>
        </Grid>

        {/* Top Performers */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Top Performers</Typography>
            {/* Insert Top Performers Component */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManagerDashboard;
