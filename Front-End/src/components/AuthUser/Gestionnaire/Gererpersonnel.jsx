import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid, Box, CardMedia, Collapse } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Client from "../../../assets/11-client-mystere-restaurant.jpg";
import Serveuse from "../../../assets/website/14074817lpw-14074831-article-serveur-restaurant-cafe-jpg_5112711_660x287.webp";
import Personnel from "../../../assets/website/rever-de-faire-du-cafe-en-islam.webp";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Gererpersonnel = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([
    {
      id: 1, name: 'Employee 1', role: 'Manager', active: true, ordersToday: 5,
      totalOrders: 100, experienceLevel: 'Expert', email: 'employee1@example.com', phone: '123-456-7890',
      hireDate: '2020-01-15', shiftTiming: '9 AM - 5 PM', department: 'Management', achievements: 'Employee of the Month',
      supervisor: 'Supervisor 1', pendingTasks: 'Complete monthly report'
    },
    {
      id: 2, name: 'Employee 2', role: 'Waiter', active: false, ordersToday: 3,
      totalOrders: 50, experienceLevel: 'Intermediate', email: 'employee2@example.com', phone: '098-765-4321',
      hireDate: '2019-03-20', shiftTiming: '10 AM - 6 PM', department: 'Service', achievements: 'Best Waiter Award',
      supervisor: 'Supervisor 2', pendingTasks: 'Serve table 5'
    },
    {
      id: 3, name: 'Employee 3', role: 'Chef', active: true, ordersToday: 7,
      totalOrders: 200, experienceLevel: 'Master', email: 'employee3@example.com', phone: '456-123-7890',
      hireDate: '2018-06-12', shiftTiming: '8 AM - 4 PM', department: 'Kitchen', achievements: 'Master Chef Award',
      supervisor: 'Supervisor 3', pendingTasks: 'Prepare special menu'
    },
    {
      id: 4, name: 'Employee 4', role: 'Barista', active: false, ordersToday: 2,
      totalOrders: 30, experienceLevel: 'Beginner', email: 'employee4@example.com', phone: '321-654-9870',
      hireDate: '2021-09-10', shiftTiming: '11 AM - 7 PM', department: 'Beverage', achievements: 'Best Newcomer',
      supervisor: 'Supervisor 4', pendingTasks: 'Restock coffee beans'
    },
  ]);
  const [details, setDetails] = useState([]);

  const toggleDetails = (id) => {
    setDetails(details.includes(id) ? details.filter(detailId => detailId !== id) : [...details, id]);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" minHeight="100vh" bgcolor="#f0f0f0"
    p={2}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#795548', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
          <AccountBalanceIcon style={{ fill: 'white', marginRight: '5px' }} />
          Users
        </div>
        <Button
          component={Link}
          to="/gest/ajouterperson"
          color="primary"
          variant="contained"
          sx={{ backgroundColor: '#795548', color: 'white', borderRadius: '5px', padding: '5px 10px' }}
        >
          Ajouter
        </Button>
      </div>
      <Grid container spacing={2} justifyContent="center">
        {employees.map((employee) => (
          <Grid item xs={12} sm={4} key={employee.id}>
            <Card sx={{ border: '2px solid #8B4513', height: '100%' }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h5" component="div">
                    {employee.name}
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: employee.active ? 'green' : 'red',
                      color: 'white',
                      borderRadius: '5px',
                      padding: '2px 8px'
                    }}
                  >
                    {employee.active ? 'Active' : 'Inactive'}
                  </Box>
                </Box>
                <Typography variant="body2" color="textSecondary" align="center">
                  Role: {employee.role}
                </Typography>
                <Box display="flex" justifyContent="center" mt={2}>
                  <CardMedia
                    component="img"
                    height="140"
                    width="200"
                    image={employee.role === 'Manager' ? Serveuse : (employee.role === 'Waiter' ? Client : Personnel)}
                    alt="Employee"
                    style={{ margin: 'auto' }}
                  />
                </Box>
              </CardContent>
              <CardActions style={{ justifyContent: 'center' }}>
                <Button
                  onClick={() => toggleDetails(employee.id)}
                  color="primary"
                  sx={{ backgroundColor: '#795548', color: 'white', padding: '5px 10px', borderRadius: '5px', marginRight: '5px' }}
                >
                  {details.includes(employee.id) ? 'Hide' : 'Details'}
                </Button>
                <Button
                  component={Link}
                  to="/gest/updateperson"
                  color="primary"
                  sx={{ backgroundColor: '#FFA726', color: 'white', padding: '5px 10px', borderRadius: '5px', marginRight: '5px' }}
                >
                  Update
                </Button>
                <Button
                  component={Link}
                  color="secondary"
                  sx={{ backgroundColor: '#FF7043', color: 'white', padding: '5px 10px', borderRadius: '5px' }}
                >
                  Delete
                </Button>
              </CardActions>
              <Collapse in={details.includes(employee.id)} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    Employee ID: {employee.id}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Email: {employee.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Phone: {employee.phone}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Hire Date: {employee.hireDate}
</Typography>
<Typography variant="body2" color="textSecondary">
Shift Timing: {employee.shiftTiming}
</Typography>
<Typography variant="body2" color="textSecondary">
Department: {employee.department}
</Typography>
<Typography variant="body2" color="textSecondary">
Achievements: {employee.achievements}
</Typography>
<Typography variant="body2" color="textSecondary">
Supervisor: {employee.supervisor}
</Typography>
<Typography variant="body2" color="textSecondary">
Pending Tasks: {employee.pendingTasks}
</Typography>
<Typography variant="body2" color="textSecondary">
Total Orders Today: {employee.ordersToday}
</Typography>
<Typography variant="body2" color="textSecondary">
Total Orders This Month: {employee.totalOrders}
</Typography>
<Typography variant="body2" color="textSecondary">
Experience Level: {employee.experienceLevel}
</Typography>
</CardContent>
</Collapse>
</Card>
</Grid>
))}
</Grid>
</Box>
);
};

export default Gererpersonnel;
