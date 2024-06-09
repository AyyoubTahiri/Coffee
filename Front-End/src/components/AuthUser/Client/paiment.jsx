import React, { useState } from 'react';
import {
  Container, Typography, Grid, Card, CardContent, CardActions, Button, Box, TextField, Select, MenuItem, CardMedia
} from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import mcpng from "../../../assets/mc.png";
import ppng from "../../../assets/pp.png";
import vipng from "../../../assets/vi.png";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#f4e1d2',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#6d4c41',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#5a382f',
  },
}));

const PaymentForm = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', padding: 2, backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" gutterBottom align="center" color="#6d4c41">
        Confirm Your Payment
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">Owner</Typography>
            <TextField fullWidth variant="outlined" />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">CVV</Typography>
            <TextField fullWidth variant="outlined" type="password" />
          </Box>
        </Box>
        <Box>
          <Typography variant="h6">Card Number</Typography>
          <TextField fullWidth variant="outlined" />
        </Box>
        <Box>
          <Typography variant="h6">Expiration Date</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Select fullWidth>
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                <MenuItem key={month} value={month}>{month}</MenuItem>
              ))}
            </Select>
            <Select fullWidth>
              {[2020, 2019, 2018, 2017, 2016, 2015].map((year) => (
                <MenuItem key={year} value={year}>{year}</MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <CardMedia
              component="img"
              image={mcpng}
              alt="MasterCard"
              sx={{ width: '50px' }}
            />
            <CardMedia
              component="img"
              image={vipng}
              alt="Visa"
              sx={{ width: '50px' }}
            />
            <CardMedia
              component="img"
              image={ppng}
              alt="PayPal"
              sx={{ width: '50px' }}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <StyledButton variant="contained" onClick={() => navigate(-1)}>Cancel</StyledButton>
            <StyledButton variant="contained">Confirm</StyledButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentForm;