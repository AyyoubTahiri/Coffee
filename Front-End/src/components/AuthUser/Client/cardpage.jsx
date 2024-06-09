import React from 'react';
import {
  Container, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton,
  Button, Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, updateItemQuantity } from '../../Redux/authActions';

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.auth.cartItems);

  const handleQuantityChange = (index, newQuantity) => {
    dispatch(updateItemQuantity(index, newQuantity));
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItemFromCart(index));
  };

  // Calculate subtotal by summing the total for each item in the cart
  const subtotal = cartItems.reduce((sum, item) => sum + (parseFloat(item.Prix) * item.quantity), 0);

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
                <TableCell><img src={item.image} alt={item.nomProduit} style={{ width: '50px' }} /></TableCell>
                <TableCell>
                  <Typography variant="subtitle1">{item.nomProduit}</Typography>
                </TableCell>
                <TableCell>{parseFloat(item.Prix).toFixed(2)} USD</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleQuantityChange(index, item.quantity - 1)} disabled={item.quantity === 1}>-</IconButton>
                  {item.quantity}
                  <IconButton onClick={() => handleQuantityChange(index, item.quantity + 1)}>+</IconButton>
                </TableCell>
                <TableCell>{(parseFloat(item.Prix) * item.quantity).toFixed(2)} USD</TableCell>
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
