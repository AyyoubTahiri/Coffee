import React from 'react';
import { Typography, List, ListItem, ListItemText, ListItemIcon, Divider, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

const ServiceClient = () => {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#fff3e0', borderRadius: '8px' }}>
      <Typography variant="h3" align="center" style={{ color: '#6d4c41' }}>Service Client</Typography>
      <List component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <HelpOutlineIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="FAQ" secondary="Foire aux questions" />
          <IconButton edge="end" aria-label="go to FAQ">
            <ChatIcon color="primary" />
          </IconButton>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <ContactMailIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Contactez-nous" secondary="Pour toute question ou réclamation" />
          <IconButton edge="end" aria-label="send email">
            <ContactMailIcon color="primary" />
          </IconButton>
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemIcon>
            <LiveHelpIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Chat en Direct" secondary="Parlez directement avec un de nos conseillers" />
          <IconButton edge="end" aria-label="start chat">
            <LiveHelpIcon color="primary" />
          </IconButton>
        </ListItem>
      </List>
    </div>
  );
};

export default ServiceClient;
