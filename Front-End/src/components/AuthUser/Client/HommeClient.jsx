import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardActions, Button, TextField, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';

const HomeClient = ({ client }) => {
  const [persons, setPersons] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');

  const handlePersonsChange = (event) => {
    setPersons(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  // Providing default values if client is undefined or properties are missing
  const name = client?.name || 'Guest';
  const loyaltyPoints = client?.loyaltyPoints || 0;
  const recentOrders = client?.recentOrders || [];
  const upcomingReservations = client?.upcomingReservations || [];
  const featuredItems = client?.featuredItems || [];

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome back, {name}!
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <iframe
            title="map"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9980177077787!2d-74.00871228463238!3d40.7139489793316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a198b654f39%3A0x5a2e7ab653409fd9!2s41%20Park%20Row%2C%20New%20York%2C%20NY%2010008%2C%20USA!5e0!3m2!1sen!2s!4v1594366795361!5m2!1sen!2s"
            allowFullScreen
          ></iframe>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box component="form" noValidate autoComplete="off" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <Typography variant="h6" gutterBottom>
              #Reservation
            </Typography>
            <Typography variant="h4" gutterBottom>
              BOOK A TABLE
            </Typography>
            <TextField fullWidth label="Your Email" margin="normal" variant="outlined" />
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel id="persons-select-label">Persons</InputLabel>
              <Select
                labelId="persons-select-label"
                value={persons}
                onChange={handlePersonsChange}
                label="Persons"
              >
                {[...Array(10)].map((_, i) => (
                  <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Date"
              type="date"
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              value={date}
              onChange={handleDateChange}
            />
            <TextField
              fullWidth
              label="Time"
              type="time"
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              value={time}
              onChange={handleTimeChange}
            />
            <TextField fullWidth label="Your Message" margin="normal" variant="outlined" multiline rows={4} />
            <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
              BOOK A TABLE
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="h4" style={{ marginTop: '40px' }} gutterBottom>
        Your Dashboard
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Your Loyalty Points</Typography>
              <Typography variant="h6">{loyaltyPoints} Points</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Redeem Rewards
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Recent Orders</Typography>
              {recentOrders.length > 0 ? (
                recentOrders.map((order, index) => (
                  <Typography key={index} variant="body1">
                    {order}
                  </Typography>
                ))
              ) : (
                <Typography variant="body1">No recent orders</Typography>
              )}
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                View All Orders
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Upcoming Reservations</Typography>
              {upcomingReservations.length > 0 ? (
                upcomingReservations.map((reservation, index) => (
                  <Typography key={index} variant="body1">
                    {reservation.date} at {reservation.time}
                  </Typography>
                ))
              ) : (
                <Typography variant="body1">No upcoming reservations</Typography>
              )}
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Make a Reservation
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Typography variant="h4" style={{ marginTop: '40px' }} gutterBottom>
        Featured Items
      </Typography>
      <Grid container spacing={4}>
        {featuredItems.length > 0 ? (
          featuredItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No featured items available</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default HomeClient;
