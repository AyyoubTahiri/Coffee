import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Divider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const stockChanges = [
  { id: 1, item: 'Coffee Beans', change: '-10 kg', date: '2024-06-01 09:00 AM' },
  { id: 2, item: 'Milk', change: '+20 liters', date: '2024-06-01 10:30 AM' },
  { id: 3, item: 'Sugar', change: '-5 kg', date: '2024-06-01 11:15 AM' },
];

const managerActivities = [
  { id: 1, activity: 'Approved new supplier contract', date: '2024-06-01 08:30 AM' },
  { id: 2, activity: 'Reviewed monthly sales report', date: '2024-06-01 10:00 AM' },
  { id: 3, activity: 'Organized staff meeting', date: '2024-06-01 11:45 AM' },
];

const salesToday = [
  { id: 1, item: 'Latte', amount: '$5', date: '2024-06-01 09:15 AM' },
  { id: 2, item: 'Cappuccino', amount: '$4.50', date: '2024-06-01 10:45 AM' },
  { id: 3, item: 'Espresso', amount: '$3', date: '2024-06-01 11:30 AM' },
];

const RecentActivitiesPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Recent Activities
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Stock Changes
              </Typography>
              {stockChanges.map((change) => (
                <Box key={change.id} sx={{ marginBottom: 2 }}>
                  <Typography variant="body1"><strong>{change.item}</strong> {change.change}</Typography>
                  <Typography variant="body2" color="textSecondary">{change.date}</Typography>
                  <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Manager Activities
              </Typography>
              {managerActivities.map((activity) => (
                <Box key={activity.id} sx={{ marginBottom: 2 }}>
                  <Typography variant="body1">{activity.activity}</Typography>
                  <Typography variant="body2" color="textSecondary">{activity.date}</Typography>
                  <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Sales Today
              </Typography>
              {salesToday.map((sale) => (
                <Box key={sale.id} sx={{ marginBottom: 2 }}>
                  <Typography variant="body1"><strong>{sale.item}</strong> {sale.amount}</Typography>
                  <Typography variant="body2" color="textSecondary">{sale.date}</Typography>
                  <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="flex-end" sx={{ marginTop: 4 }}>
        <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
          Return
        </Button>
      </Box>
    </Container>
  );
};

export default RecentActivitiesPage;
