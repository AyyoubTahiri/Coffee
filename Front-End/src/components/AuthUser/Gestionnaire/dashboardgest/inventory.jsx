import React from 'react';
import { Container, Typography, Grid, Card, CardContent, LinearProgress, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ingredients = [
  { name: 'Coffee Beans', quantity: 120, unit: 'kg', threshold: 20 },
  { name: 'Milk', quantity: 50, unit: 'liters', threshold: 10 },
  { name: 'Sugar', quantity: 200, unit: 'kg', threshold: 30 },
  { name: 'Flour', quantity: 75, unit: 'kg', threshold: 15 },
  { name: 'Butter', quantity: 40, unit: 'kg', threshold: 10 },
  { name: 'Eggs', quantity: 300, unit: 'pcs', threshold: 50 },
  { name: 'Tea Leaves', quantity: 80, unit: 'kg', threshold: 15 },
];

const InventoryPage = () => {
  const navigate = useNavigate();

  const getProgressColor = (quantity, threshold) => {
    const ratio = quantity / threshold;
    if (ratio > 2) {
      return 'success';
    } else if (ratio > 1) {
      return 'warning';
    } else {
      return 'error';
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Inventory Overview
      </Typography>
      <Grid container spacing={3}>
        {ingredients.map((ingredient, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ minHeight: 150 }}>
              <CardContent>
                <Typography variant="h6">{ingredient.name}</Typography>
                <Typography variant="body1">
                  {ingredient.quantity} {ingredient.unit} remaining
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                  <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={(ingredient.quantity / (ingredient.threshold * 2)) * 100}
                      color={getProgressColor(ingredient.quantity, ingredient.threshold)}
                    />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                      (ingredient.quantity / (ingredient.threshold * 2)) * 100,
                    )}%`}</Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color={getProgressColor(ingredient.quantity, ingredient.threshold)}>
                  {ingredient.quantity <= ingredient.threshold
                    ? 'Low Stock'
                    : ingredient.quantity <= ingredient.threshold * 2
                    ? 'Moderate Stock'
                    : 'High Stock'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="flex-end" sx={{ marginTop: 4 }}>
        <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
          Return
        </Button>
      </Box>
    </Container>
  );
};

export default InventoryPage;
