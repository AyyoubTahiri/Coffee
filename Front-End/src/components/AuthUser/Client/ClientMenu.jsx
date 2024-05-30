import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import cafee from '../../../assets/grandBack.png';

const coffeeTypes = [
  { name: 'Espresso', description: 'Strong black coffee' },
  { name: 'Cappuccino', description: 'Espresso mixed with steamed milk foam' },
  { name: 'Latte', description: 'Espresso mixed with steamed milk' },
  { name: 'Americano', description: 'Espresso with added hot water' },
  { name: 'Macchiato', description: 'Espresso "stained" with a small amount of steamed milk' },
  { name: 'Mocha', description: 'Espresso with steamed milk and chocolate syrup' },
];

const ClientMenu = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Menu Café
      </Typography>
      <Grid container spacing={3}>
        {coffeeTypes.map((coffee) => (
          <Grid item xs={12} sm={6} md={4} key={coffee.name}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={cafee}
                alt="Coffee"
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
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ClientMenu;
