import React from 'react';
import { Container, Card, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

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
  height: 140,
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
    imageUrl: 'https://example.com/livraison.jpg', // Replace with your image URL
  },
  {
    title: 'Café à Emporter',
    description: 'Passez prendre votre café à emporter et savourez-le où vous le souhaitez.',
    imageUrl: 'https://example.com/emporter.jpg', // Replace with your image URL
  },
  {
    title: 'reservation du table',
    description: 'Trouvez notre café avec notre localisation pratique et profitez de notre ambiance chaleureuse.',
    imageUrl: 'https://example.com/location.jpg', // Replace with your image URL
  },
];

const manager = {
  title: 'Manager',
  name: 'John Doe',
  imageUrl: 'https://example.com/manager.jpg', // Replace with your image URL
};

const team = [
  {
    title: 'Chef de Cuisine',
    name: 'Jane Smith',
    imageUrl: 'https://example.com/chef1.jpg', // Replace with your image URL
  },
  {
    title: 'Chef de Cuisine',
    name: 'Robert Brown',
    imageUrl: 'https://example.com/chef2.jpg', // Replace with your image URL
  },
  {
    title: 'Serveur',
    name: 'Emily Davis',
    imageUrl: 'https://example.com/waiter1.jpg', // Replace with your image URL
  },
  {
    title: 'Serveur',
    name: 'Michael Wilson',
    imageUrl: 'https://example.com/waiter2.jpg', // Replace with your image URL
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
