import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid, Card, CardContent, CardActions, CardMedia, Collapse, Switch, FormControlLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import BackgroundCafeImage from '../../../../public/assets/divTextWhite.jpeg';
import { ExpandMore } from '@mui/icons-material';

const HomeClient = () => {
  const [userName, setUserName] = useState('');
  const [expandedId, setExpandedId] = useState(-1);
  const [playMusic, setPlayMusic] = useState(false);

  useEffect(() => {
    const userEmail = "client@example.com";
    const name = extractNameFromEmail(userEmail);
    setUserName(name);
  }, []);

  const handleExpandClick = (id) => {
    setExpandedId(expandedId === id ? -1 : id);
  };

  const handleMusicChange = () => {
    setPlayMusic(!playMusic);
  };

  function extractNameFromEmail(email) {
    return email.substring(0, email.indexOf('@'));
  }

  const styles = {
    card: {
      maxWidth: 345,
      margin: 'auto',
      backgroundColor: '#efebe9',
      borderRadius: '15px',
      boxShadow: '5px 5px 15px rgba(0,0,0,0.2)'
    },
    button: {
      backgroundColor: '#6d4c41',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#5d4037'
      }
    },
    typography: {
      color: '#3e2723'
    },
    background: {
      backgroundImage: `url(${BackgroundCafeImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
      borderRadius: '8px'
    }
  };

  const employees = [
    { id: 1, name: "Alice", role: "Barista", description: "Expert en café italien et latte art.", image: 'path/to/image1.jpg', moreInfo: "Alice a remporté plusieurs compétitions de latte art." },
    { id: 2, name: "Bob", role: "Chef", description: "Spécialiste des pâtisseries et des desserts gourmands.", image: 'path/to/image2.jpg', moreInfo: "Bob a étudié la pâtisserie à Paris." },
    { id: 3, name: "Clara", role: "Manager", description: "Gère l'opération quotidienne et la satisfaction client.", image: 'path/to/image3.jpg', moreInfo: "Clara est reconnue pour son excellent service client et sa gestion efficace." }
  ];

  return (
    <div style={styles.background}>
      <Typography variant="h3" style={styles.typography} gutterBottom align="center">
        Welcome to Our Café, {userName}!
      </Typography>
      <FormControlLabel
        control={<Switch checked={playMusic} onChange={handleMusicChange} />}
        label="Play Ambient Music"
        labelPlacement="start"
        style={{ color: '#fff', marginLeft: '20px' }}
      />
      <Grid container spacing={3} justifyContent="center">
        {employees.map((employee) => (
          <Grid item key={employee.id} xs={12} sm={6} md={4}>
            <Card style={styles.card} raised>
              <CardMedia
                component="img"
                height="140"
                image={employee.image}
                alt={employee.name}
              />
              <CardContent>
                <Typography variant="h5" component="div" style={styles.typography}>
                  {employee.name}
                </Typography>
                <Typography color="textSecondary">
                  {employee.role}
                </Typography>
                <Typography variant="body2" style={styles.typography}>
                  {employee.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button size="small" style={styles.button}>Learn More</Button>
                <ExpandMore
                  expand={expandedId === employee.id}
                  onClick={() => handleExpandClick(employee.id)}
                  aria-expanded={expandedId === employee.id}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expandedId === employee.id} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph style={styles.typography}>
                    {employee.moreInfo}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomeClient;
