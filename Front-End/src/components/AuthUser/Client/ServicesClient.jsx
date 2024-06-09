import React from 'react';
import { Container, Card, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import reserve from '../../../assets/website/reservepng.jpg';
import emporter from '../../../assets/website/cafe-a-emporter.jpg';
import livraison from '../../../assets/website/livraison.png';
import waiter1 from '../../../assets/website/waiter1.png';
import waiter2 from '../../../assets/website/waiter2.png';
import chef1 from '../../../assets/website/chef.png';
import chef2 from '../../../assets/website/chef2.png';
import managerImg from '../../../assets/website/manager.png';

const Root = styled(Container)(({ theme }) => ({
  marginTop: 20,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginTop: 40,
  marginBottom: 20,
  textAlign: 'center',
}));

const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: 'auto',
}));

const Media = styled('img')(({ theme }) => ({
  height: 400, // Increase height to show full face
  backgroundSize: 'contain',
  width: '100%',
  objectFit: 'cover',
}));

const Content = styled(CardContent)(({ theme }) => ({
  textAlign: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: 10,
}));

const services = [
  {
    title: 'Livraison de Café',
    description: 'Profitez de notre service de livraison pour déguster votre café préféré chez vous.',
    imageUrl: livraison, // Using the provided image
  },
  {
    title: 'Café à Emporter',
    description: 'Passez prendre votre café à emporter et savourez-le où vous le souhaitez.',
    imageUrl: emporter, // Using the provided image
  },
  {
    title: 'Réservation de Table',
    description: 'Réservez une table à l\'avance pour profiter de notre ambiance chaleureuse.',
    imageUrl: reserve, // Using the provided image
  },
];

const manager = {
  title: 'Manager',
  name: 'John Doe',
  imageUrl: managerImg, // Using the provided image
};

const team = [
  {
    title: 'Chef de Cuisine',
    name: 'Jane Smith',
    imageUrl: chef1, // Using the provided image
  },
  {
    title: 'Chef de Cuisine',
    name: 'Robert Brown',
    imageUrl: chef2, // Using the provided image
  },
  {
    title: 'Serveur',
    name: 'Emily Davis',
    imageUrl: waiter1, // Using the provided image
  },
  {
    title: 'Serveur',
    name: 'Michael Wilson',
    imageUrl: waiter2, // Using the provided image
  },
];

const ServicesClient = () => {
  return (
    <Root>
      <Typography variant="h4" align="center" gutterBottom>
        Nos Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CustomCard>
              <Media src={service.imageUrl} alt={service.title} />
              <Content>
                <Title variant="h5" component="div">
                  {service.title}
                </Title>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
              </Content>
            </CustomCard>
          </Grid>
        ))}
      </Grid>

      <SectionTitle variant="h4">
        Notre Équipe
      </SectionTitle>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard>
            <Media src={manager.imageUrl} alt={manager.name} />
            <Content>
              <Title variant="h5" component="div">
                {manager.name}
              </Title>
              <Typography variant="body2" color="textSecondary">
                {manager.title}
              </Typography>
            </Content>
          </CustomCard>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {team.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CustomCard>
              <Media src={member.imageUrl} alt={member.name} />
              <Content>
                <Title variant="h5" component="div">
                  {member.name}
                </Title>
                <Typography variant="body2" color="textSecondary">
                  {member.title}
                </Typography>
              </Content>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};

export default ServicesClient;
