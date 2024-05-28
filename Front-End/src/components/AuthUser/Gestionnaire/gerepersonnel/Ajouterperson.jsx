import React from 'react';
import { Box, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AjouterPerson = () => {
    const navigate = useNavigate();
  return (
    
    <Box>
      <Typography variant="h4" gutterBottom>Ajouter Personne</Typography>
      <Typography variant="body1" gutterBottom>
        Veuillez remplir les informations ci-dessous pour ajouter une personne :
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="nom"
            label="Nom"
            variant="outlined"
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="prenom"
            label="Prénom"
            variant="outlined"
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            variant="outlined"
            margin="normal"
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="description"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            Choisissez une photo :
          </Typography>
          <input
            accept="image/*"
            id="photo"
            type="file"
            style={{ display: 'none' }}
          />
          <label htmlFor="photo">
            <Button
              variant="contained"
              component="span"
            >
              Choisir une photo
            </Button>
          </label>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
          >
            Ajouter
          </Button>
        </Grid>
        <Grid item xs={6} align="right">
          <Button
            variant="outlined"
            color="secondary"
            component={RouterLink}
            onClick={() => navigate('/gest/gererperson')}
          >
            Annuler
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AjouterPerson;
