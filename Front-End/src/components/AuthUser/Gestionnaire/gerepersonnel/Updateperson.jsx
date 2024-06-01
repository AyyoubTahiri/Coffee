import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';



const Updateperson = ({ employees, setEmployees }) => {
    
  const { id } = useParams();
  const navigate = useNavigate();
  const employee = null

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (employee) {
      setFormData({ ...employee, password: '', confirmPassword: '' });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const updatedEmployees = employees.map(emp =>
      emp.id === parseInt(id) ? { ...emp, ...formData, password: undefined, confirmPassword: undefined } : emp
    );
    setEmployees(updatedEmployees);
    navigate('/manage-employees');  // Navigate back to the employees list
  };

  const handleCancel = () => {
    navigate('/manage-employees');
  };



  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f0f0f0"
      p={2}
    >
      <Typography variant="h4" component="div" gutterBottom>
        Update Employee
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Box mt={2} display="flex" justifyContent="space-between" width="100%">
          <Button type="submit" variant="contained" color="primary">
            Confirm
          </Button>
          <Button   onClick={() => navigate('/gest/gererperson')} variant="outlined" color="secondary" >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Updateperson;
