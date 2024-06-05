import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Box, Snackbar, Alert } from '@mui/material';

const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !message) {
            setOpenError(true);
        } else {
            // Handle form submission
            console.log('Contact Form Details:', {
                name,
                email,
                message,
            });
            setOpenSuccess(true);
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
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    margin="normal"
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    margin="normal"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Message"
                                    margin="normal"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" fullWidth type="submit">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
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
            </Grid>

            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    The form has been sent successfully!
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

export default Contacts;
