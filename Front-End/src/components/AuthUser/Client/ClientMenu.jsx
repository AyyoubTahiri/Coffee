import React, { useState } from 'react';
import {
  Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button,
  Dialog, DialogContent, DialogTitle, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel
} from '@mui/material';
import cafee from '../../../assets/grandBack.png';  // Ensure this path is correct

const coffeeTypes = [
  { name: 'Espresso', description: 'Strong black coffee' },
  { name: 'Cappuccino', description: 'Espresso mixed with steamed milk foam' },
  { name: 'Latte', description: 'Espresso mixed with steamed milk' },
  { name: 'Americano', description: 'Espresso with added hot water' },
  { name: 'Macchiato', description: 'Espresso "stained" with a small amount of steamed milk' },
  { name: 'Mocha', description: 'Espresso with steamed milk and chocolate syrup' },
];

const pageStyle = {
  backgroundColor: '#fff3e0',
  padding: '20px',
  minHeight: '100vh',
  width: '100%',
};

const cardStyle = {
  maxWidth: 345,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

const ClientMenu = () => {
  const [open, setOpen] = useState(false);
  const [orderType, setOrderType] = useState('');
  const [address, setAddress] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [selectedTable, setSelectedTable] = useState('');

  const handlePlusClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    alert(`Order type: ${orderType}, Address: ${address}, Pickup Time: ${pickupTime}, Table: ${selectedTable}`);
    handleClose();
  };

  return (
    <div style={pageStyle}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Menu Café
        </Typography>
        <Grid container spacing={3}>
          {coffeeTypes.map((coffee) => (
            <Grid item xs={12} sm={6} md={4} key={coffee.name}>
              <Card sx={cardStyle}>
                <CardMedia
                  component="img"
                  height="140"
                  image={cafee}
                  alt={coffee.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {coffee.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {coffee.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                  <Button size="small" onClick={handlePlusClick}>+</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Place Your Order</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel>Type of Order</InputLabel>
            <Select
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
              label="Type of Order"
            >
              <MenuItem value="emporter">Takeaway</MenuItem>
              <MenuItem value="reserver la table">Table Reservation</MenuItem>
              <MenuItem value="livreur">Delivery</MenuItem>
            </Select>
          </FormControl>

          {orderType === 'livreur' && (
            <TextField
              fullWidth
              margin="normal"
              label="Delivery Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          )}

          {orderType === 'emporter' && (
            <TextField
              fullWidth
              margin="normal"
              label="Pickup Time"
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          )}

          {orderType === 'reserver la table' && (
            <FormControl fullWidth margin="normal">
              <InputLabel>Select a Table</InputLabel>
              <Select
                value={selectedTable}
                onChange={(e) => setSelectedTable(e.target.value)}
                label="Select a Table"
              >
                <MenuItem value="1">Table 1</MenuItem>
                <MenuItem value="2">Table 2</MenuItem>
                <MenuItem value="3">Table 3</MenuItem>
              </Select>
            </FormControl>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ClientMenu;
