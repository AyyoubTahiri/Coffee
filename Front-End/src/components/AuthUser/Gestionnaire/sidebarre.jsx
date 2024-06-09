import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ShoppingCart, BarChart, MenuBook, Dashboard, AccountBalance, CalendarToday, Kitchen, ExitToApp } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { logout } from '../../../components/Redux/authActions';  // Adjust the import according to your project structure

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

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
        <ListItem button component={Link} to="/gest/Analytic">
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button component={Link} to="/gest/schedule">
          <ListItemIcon>
            <CalendarToday />
          </ListItemIcon>
          <ListItemText primary="Schedule" />
        </ListItem>
        <ListItem button component={Link} to="/gest/ingredients">
          <ListItemIcon>
            <Kitchen />
          </ListItemIcon>
          <ListItemText primary="Ingredients" />
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
