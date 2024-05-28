import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid, Box, CardMedia } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Client from "../../../assets/11-client-mystere-restaurant.jpg"
import Serveuse from "../../../assets/website/14074817lpw-14074831-article-serveur-restaurant-cafe-jpg_5112711_660x287.webp";
import Personnel from "../../../assets/website/rever-de-faire-du-cafe-en-islam.webp";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const GestionCompt = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      minHeight="100vh"
      bgcolor="#f0f0f0"
      p={2}
    >
      <div style={{ backgroundColor: '#795548', color: 'white', padding: '5px 10px', borderRadius: '5px', marginBottom: '20px' }}>
        <AccountBalanceIcon style={{ fill: 'white', marginRight: '5px' }} />
        Users
      </div>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Card sx={{ border: '2px solid #8B4513' }}>
            <CardContent>
              <Typography variant="h5" component="div" align="center">
                Gérer les Personneles
              </Typography>
              <Box display="flex" justifyContent="center">
                <CardMedia
                  component="img"
                  image={Personnel}
                  alt="Gérer le Personnel"
                  sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                />
              </Box>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button component={Link} onClick={() => navigate('/gest/gererperson')}  color="primary" sx={{ backgroundColor: '#795548', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
                Gerer
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ border: '2px solid #8B4513' }}>
            <CardContent>
              <Typography variant="h5" component="div" align="center">
                Gérer les Serveurs
              </Typography>
              <Box display="flex" justifyContent="center">
                <CardMedia
                  component="img"
                  image={Serveuse}
                  alt="Gérer les Serveurs"
                  sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                />
              </Box>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button component={Link} to="/gerer-personnel" color="primary" sx={{ backgroundColor: '#795548', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
                Gerer
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ border: '2px solid #8B4513' }}>
            <CardContent>
              <Typography variant="h5" component="div" align="center">
                Gérer les Clients
              </Typography>
              <Box display="flex" justifyContent="center">
                <CardMedia
                  component="img"
                  image={Client}
                  alt="Gérer les Clients"
                  sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                />
              </Box>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button component={Link} to="/gerer-personnel" color="primary" sx={{ backgroundColor: '#795548', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
                Gerer
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GestionCompt;
