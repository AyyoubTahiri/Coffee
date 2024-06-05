import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, MenuItem, Select, FormControl, InputLabel, Box, Snackbar, Alert } from '@mui/material';
import { DatePicker, TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [guests, setGuests] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const [tableNumber, setTableNumber] = useState('');
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!date || !time || !guests || !name || !email || !phone || !tableNumber) {
            setOpenError(true);
        } else {
            // Handle reservation submission
            console.log('Reservation details:', {
                date,
                time,
                guests,
                name,
                email,
                phone,
                specialRequests,
                tableNumber,
            });
            setOpenSuccess(true);
            setTimeout(() => {
                navigate('/client/paiment');
            }, 2000);  // Wait 2 seconds before navigating to the payment page
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccess(false);
        setOpenError(false);
    };

    return (
        
        <Container maxWidth="md" style={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Make a Reservation
            </Typography>
            <Box sx={{ my: 2 }}>
                <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/vUhEvcg3tpk?si=qGb81S2TCYYpaqnE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </Box>
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth margin="normal">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Select Date"
                                    value={date}
                                    onChange={(newValue) => setDate(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth margin="normal">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="Select Time"
                                    value={time}
                                    onChange={(newValue) => setTime(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="guests-select-label">Number of Guests</InputLabel>
                            <Select
                                labelId="guests-select-label"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                label="Number of Guests"
                            >
                                {[...Array(20)].map((_, i) => (
                                    <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Name" margin="normal" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email" margin="normal" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Phone" margin="normal" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Table Number" margin="normal" variant="outlined" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Special Requests"
                            margin="normal"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={specialRequests}
                            onChange={(e) => setSpecialRequests(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth type="submit">
                            Submit Reservation
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    The reservation has been submitted successfully!
                </Alert>
            </Snackbar>

            <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    You must complete the form!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Reservation;
