import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Receipt, ExitToApp } from '@mui/icons-material'; // Importing the ExitToApp icon
import { logout } from '../../Redux/authActions';
import { useDispatch } from 'react-redux';
const SidebarPersonnel = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
  dispatch(logout());
  navigate('/');
};
  return (
    <div style={{ width: '250px', backgroundColor: '#f0f0f0', height: '100vh' }}>
      <List>
        {/* Button for "Gestion des commandes" */}
        <ListItem button component={Link} to="/gest/Compt">
          <ListItemIcon>
            <Receipt /> {/* Using the Receipt icon */}
          </ListItemIcon>
          <ListItemText primary="Gestion des commandes" /> {/* Text for "Gestion des commandes" */}
        </ListItem>
        
        {/* Logout button */}
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <ExitToApp /> {/* Using the ExitToApp icon */}
          </ListItemIcon>
          <ListItemText primary="Logout" /> {/* Text for "Logout" */}
        </ListItem>
      </List>
    </div>
  );
};


export default SidebarPersonnel;
