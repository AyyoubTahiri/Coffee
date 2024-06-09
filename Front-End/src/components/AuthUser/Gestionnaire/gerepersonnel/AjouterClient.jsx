import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Grid, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddUseres, getRoles } from '../../../Redux/authActions';

const AjouterClient = ({ onAddEmployee }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const roles = useSelector((state) => state.auth.roles);
    
    const [formValues, setFormValues] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        idRole: 3,
        address: '',
        numero: ''
    });

    useEffect(() => {
        dispatch(getRoles());
    }, [dispatch]);

    const handleInputChange = (event) => {
        const { id, value, name } = event.target;
        setFormValues({
            ...formValues,
            [id || name]: value
        });
    };

    const handleSubmit = () => {
        const { nom, prenom, email, password, idRole, address, numero } = formValues;
        if (nom && prenom && email && password && idRole && address && numero) {
            dispatch(AddUseres(formValues, () => {
                navigate('/gest/gererclient');
            }));
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>Ajouter Client</Typography>
            <Typography variant="body1" gutterBottom>
                Veuillez remplir les informations ci-dessous pour ajouter une client :
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="nom"
                        label="Nom"
                        variant="outlined"
                        margin="normal"
                        value={formValues.nom}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="prenom"
                        label="Prénom"
                        variant="outlined"
                        margin="normal"
                        value={formValues.prenom}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="email"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="password"
                        label="Mot de passe"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        value={formValues.password}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="address"
                        label="Address"
                        variant="outlined"
                        margin="normal"
                        value={formValues.address}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="numero"
                        label="Numero"
                        variant="outlined"
                        margin="normal"
                        value={formValues.numero}
                        onChange={handleInputChange}
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        Ajouter
                    </Button>
                </Grid>
                <Grid item xs={6} align="right">
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => navigate('/gest/gererperson')}
                    >
                        Annuler
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AjouterClient;
