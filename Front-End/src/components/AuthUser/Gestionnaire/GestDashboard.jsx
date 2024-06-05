import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, Card, CardContent, Collapse, ButtonBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const ManagerDashboard = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);

  const handleMouseEnter = (section) => {
    setExpanded(section);
  };

  const handleMouseLeave = () => {
    setExpanded(null);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }} bgcolor="#f0f0f0" p={2}>
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
              <ButtonBase>
                <Typography variant="h6">Today's Sales</Typography>
              </ButtonBase>
              <Typography variant="h4">$1,200</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <ButtonBase>
                <Typography variant="h6">Pending Orders</Typography>
              </ButtonBase>
              <Typography variant="h4">15</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <ButtonBase>
                <Typography variant="h6">Low Stock Items</Typography>
              </ButtonBase>
              <Typography variant="h4">5</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Order Management */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{ padding: 2 }}
            onMouseEnter={() => handleMouseEnter('orderManagement')}
            onMouseLeave={handleMouseLeave}
          >
            <ButtonBase>
              <Typography variant="h6" onClick={() => navigate('/gest/promo')}>Promotions & Discounts</Typography>
            </ButtonBase>
            <Collapse in={expanded === 'orderManagement'} timeout="auto" unmountOnExit>
              <Typography variant="body1">
                Manage all your orders from here. This includes processing, tracking, and fulfilling orders.
              </Typography>
            </Collapse>
          </Paper>
        </Grid>

        {/* Inventory Alerts */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{ padding: 2 }}
            onMouseEnter={() => handleMouseEnter('inventoryAlerts')}
            onMouseLeave={handleMouseLeave}
          >
            <ButtonBase onClick={() => navigate('/gest/inventory')}>
              <Typography variant="h6"  >Inventory Alerts</Typography>
            </ButtonBase>
            <Collapse in={expanded === 'inventoryAlerts'} timeout="auto" unmountOnExit>
              <Typography variant="body1">
                Get alerts for items that are low in stock. Keep track of inventory levels to ensure you never run out of essential items.
              </Typography>
            </Collapse>
          </Paper>
        </Grid>

        {/* Recent Activities */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{ padding: 2 }}
            onMouseEnter={() => handleMouseEnter('recentActivities')}
            onMouseLeave={handleMouseLeave}
          >
            <ButtonBase onClick={() => navigate('/gest/activite')}>
              <Typography variant="h6">Recent Activities</Typography>
            </ButtonBase>
            <Collapse in={expanded === 'recentActivities'} timeout="auto" unmountOnExit>
              <Typography variant="body1">
                See recent activities and updates. This includes recent sales, order updates, and stock changes.
              </Typography>
            </Collapse>
          </Paper>
        </Grid>

        {/* Top Performers */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <ButtonBase onClick={() => navigate('/gest/feedback')}>
              <Typography variant="h6">Customer Feedback</Typography>
            </ButtonBase>
            {/* Insert Top Performers Component */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManagerDashboard;
