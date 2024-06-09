import React, { useState, useEffect } from 'react';
import {
  Card, CardContent, CardActions, Button, Typography, Grid, Box, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../Redux/authActions';

const Gererpersonnel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log(users);

  const [details, setDetails] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const toggleDetails = (id) => {
    setDetails(details.includes(id) ? details.filter(detailId => detailId !== id) : [...details, id]);
  };

  const handleDeleteClick = (id) => {
    setSelectedUserId(id);
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
    setSelectedUserId(null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" minHeight="100vh" bgcolor="#f0f0f0" p={2}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#795548', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
          <AccountBalanceIcon style={{ fill: 'white', marginRight: '5px' }} />
          Users
        </div>
        <Button
          component={Link}
          to="/gest/ajouterperson"
          color="primary"
          variant="contained"
          sx={{ backgroundColor: '#795548', color: 'white', borderRadius: '5px', padding: '5px 10px' }}
        >
          Ajouter
        </Button>
      </div>
      <Grid container spacing={2} justifyContent="center">
        {users.map((user) => (
          <Grid item xs={12} sm={4} key={user.id}>
            <Card sx={{ border: '2px solid #8B4513', height: '100%' }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h5" component="div">
                    {user.nom} {user.prenom}
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: 'green',
                      color: 'white',
                      borderRadius: '5px',
                      padding: '2px 8px',
                    }}
                  >
                    Online
                  </Box>
                </Box>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Role: {user.role.name}
                </Typography>
                <Typography variant="body2">
                  Email: {user.email}
                </Typography>
                <Typography variant="body2">
                  Address: {user.address}
                </Typography>
                <Typography variant="body2">
                  Phone: {user.numero}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => toggleDetails(user.id)}>
                  {details.includes(user.id) ? 'Hide Details' : 'Show Details'}
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => handleDeleteClick(user.id)}
                >
                  Delete
                </Button>
              </CardActions>
              <Collapse in={details.includes(user.id)} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2">
                    Additional Details:
                  </Typography>
                  {/* Add any additional details you want to show */}
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
      >
        <DialogTitle>{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Gererpersonnel;
