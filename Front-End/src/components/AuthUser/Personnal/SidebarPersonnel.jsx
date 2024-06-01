import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ShoppingCart, BarChart, MenuBook, Dashboard, AccountBalance } from '@mui/icons-material';

const SidebarPersonnel = () => {
  return (
    <div style={{ width: '250px', backgroundColor: '#f0f0f0', height: '100vh' }}>
      <List>
        <ListItem button component={Link} to="/gest/dashboard">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/gest/stock">
          <ListItemIcon>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Stock" />
        </ListItem>
        <ListItem button component={Link} to="/gest/menu">
          <ListItemIcon>
            <MenuBook />
          </ListItemIcon>
          <ListItemText primary="Menu" />
        </ListItem>
        <ListItem button component={Link} to="/gest/Compt">
          <ListItemIcon>
            <AccountBalance />
          </ListItemIcon>
          <ListItemText primary="Gestion Compt" />
        </ListItem>
        <ListItem button component={Link} to="gest/Analytic">
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
      </List>
    </div>
  );
};

export default SidebarPersonnel;
