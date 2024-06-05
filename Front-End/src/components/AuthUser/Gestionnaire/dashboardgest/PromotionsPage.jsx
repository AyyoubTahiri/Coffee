import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';

const promotions = [
  { id: 1, title: 'Happy Hour', description: 'Get 50% off on all coffees from 4 PM to 6 PM.', validTill: '2024-06-30' },
  { id: 2, title: 'Buy 1 Get 1 Free', description: 'Buy one cappuccino and get another one free.', validTill: '2024-07-15' },
  { id: 3, title: 'Weekend Special', description: '20% off on all pastries during weekends.', validTill: '2024-07-31' },
  { id: 4, title: 'Student Discount', description: '15% off for students with valid ID.', validTill: '2024-08-30' },
];

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#f4e1d2',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#6d4c41',
}));

const PromotionsPage = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <StyledTypography variant="h4" gutterBottom>
        Current Promotions & Discounts
      </StyledTypography>

      <Grid container spacing={3}>
        {promotions.map((promotion) => (
          <Grid item xs={12} sm={6} key={promotion.id}>
            <StyledCard sx={{ minHeight: 150 }}>
              <CardContent>
                <StyledTypography variant="h6" gutterBottom>
                  {promotion.title}
                </StyledTypography>
                <Typography variant="body1" color="textSecondary">
                  {promotion.description}
                </Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="body2" color="textSecondary">
                    Valid till: {promotion.validTill}
                  </Typography>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PromotionsPage;
