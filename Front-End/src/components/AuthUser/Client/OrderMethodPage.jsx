import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import EmporteIcon from '@mui/icons-material/LocalMall';
import LivraisonIcon from '@mui/icons-material/LocalShipping';
import ReservationIcon from '@mui/icons-material/Restaurant';
import { useNavigate } from 'react-router-dom';

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

const OrderMethodPage = () => {
  const navigate = useNavigate();

  const handleOrderTypeSelection = (orderType) => {
    
    localStorage.setItem('selectedOrderType', orderType); // Store selected order type in localStorage
    navigate('/client/commande');
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom align="center" color="#6d4c41">
        How do you want your order?
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <EmporteIcon style={{ fontSize: 50, color: '#6d4c41' }} />
              </Box>
              <Typography variant="h5" align="center" color="#6d4c41">
                Emporte
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                Take your coffee to go.
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <StyledButton variant="contained" onClick={() => handleOrderTypeSelection(1)}> {/* Replace 1 with the actual ID for Emporte */}
                Choose Emporte
              </StyledButton>
            </CardActions>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <LivraisonIcon style={{ fontSize: 50, color: '#6d4c41' }} />
              </Box>
              <Typography variant="h5" align="center" color="#6d4c41">
                Livraison
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                Get your coffee delivered to your location.
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <StyledButton variant="contained" onClick={() => handleOrderTypeSelection(2)}> {/* Replace 2 with the actual ID for Livraison */}
                Choose Livraison
              </StyledButton>
            </CardActions>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <ReservationIcon style={{ fontSize: 50, color: '#6d4c41' }} />
              </Box>
              <Typography variant="h5" align="center" color="#6d4c41">
                Réservation
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                Reserve a table at our café.
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <StyledButton variant="contained" onClick={() => navigate('/client/reserv')}> {/* Replace 3 with the actual ID for Réservation */}
                Choose Réservation
              </StyledButton>
            </CardActions>
          </StyledCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrderMethodPage;
