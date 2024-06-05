import React from 'react';
import {
  Container, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton,
  Button, Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Client/CartContext'; // Import the CartContext

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeItemFromCart, updateItemQuantity } = useCart(); // Use CartContext

  const handleQuantityChange = (index, newQuantity) => {
    updateItemQuantity(index, newQuantity);
  };

  const handleRemoveItem = (index) => {
    removeItemFromCart(index);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      <Button 
        variant="outlined" 
        color="primary" 
        onClick={() => navigate('/client/menu')}
        style={{ marginBottom: '20px' }}
      >
        Return to Menu
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell><img src={item.image} alt={item.name} style={{ width: '50px' }} /></TableCell>
                <TableCell>
                  <Typography variant="subtitle1">{item.name}</Typography>
                  {item.flavour && <Typography variant="body2">Flavour: {item.flavour}</Typography>}
                  {item.weight && <Typography variant="body2">Weight: {item.weight}</Typography>}
                </TableCell>
                <TableCell>{item.price.toFixed(2)} USD</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleQuantityChange(index, item.quantity - 1)} disabled={item.quantity === 1}>-</IconButton>
                  {item.quantity}
                  <IconButton onClick={() => handleQuantityChange(index, item.quantity + 1)}>+</IconButton>
                </TableCell>
                <TableCell>{item.total.toFixed(2)} USD</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleRemoveItem(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={8}></Grid>
        <Grid item xs={12} md={4}>
          <Box border={1} borderColor="grey.400" borderRadius={2} padding={2}>
            <Typography variant="h6">Subtotal</Typography>
            <Typography variant="h4" gutterBottom>${subtotal.toFixed(2)} USD</Typography>
            <Typography variant="body2">Taxes and shipping calculated at checkout</Typography>
            <Button onClick={() => navigate('/client/methodeorder')} variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
              Order Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;
