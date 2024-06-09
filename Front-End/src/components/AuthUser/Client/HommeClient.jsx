import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, Badge } from '@mui/material';
import { styled } from '@mui/system';
import cafeImage from '../../../assets/backCafe.png'; // Replace with the actual path to your image
import coffeeImage from '../../../assets/backCafe.png'; // Replace with the actual path to your image
import dessertImage from '../../../assets/backCafe.png'; // Replace with the actual path to your image
import waiter1 from '../../../assets/website/waiter1.png';
import waiter2 from '../../../assets/website/waiter2.png';
import chef1 from '../../../assets/website/chef.png';
import chef2 from '../../../assets/website/chef2.png';
import { useSelector } from 'react-redux'; // Assuming you're using Redux for user state

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const Banner = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${cafeImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  textAlign: 'center',
  padding: theme.spacing(2),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(4, 0, 2),
  fontWeight: 'bold',
  textAlign: 'center',
}));

const FeaturedCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: '500px', // Ensure consistent height for Featured Cards
}));

const FeaturedCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '70%', // Adjust this value to fit the content appropriately
  backgroundSize: 'contain',
  width: '100%',
  objectFit: 'cover',
}));

const FeaturedCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
}));

const ClientInfoCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const EmployeeCard = ({ name, role, status, imageUrl }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ height: '500px' }}>
      <CardMedia
        component="img"
        height="80%" // Adjust this value to fit the content appropriately
        image={imageUrl}
        alt={name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography color="textSecondary">{role}</Typography>
        <Badge
          badgeContent={status}
          color={status === 'Active' ? 'success' : 'error'}
          sx={{ mt: 1 }}
        />
      </CardContent>
    </Card>
  </Grid>
);

const Home = () => {
  const user = useSelector((state) => state.auth.user); // Replace with your user state selector
  const orders = useSelector((state) => state.orders?.list || []); // Replace with your orders state selector

  const totalOrders = orders.length;
  const favoriteItem = 'Cappuccino'; // Replace with logic to determine the favorite item

  return (
    <StyledContainer maxWidth="lg">
      <Banner>
        <Typography variant="h2" component="h1">
          Welcome to Our Café
        </Typography>
      </Banner>
      
      <Box mt={4} mb={4} textAlign="center">
        <Typography variant="h4">
          Welcome, {user?.name || 'Guest'}!
        </Typography>
      </Box>

      <ClientInfoCard>
        <CardContent>
          <Typography variant="h5" component="h2">
            Your Activity
          </Typography>
          <Typography variant="body1">
            You have made {totalOrders} orders with us.
          </Typography>
          <Typography variant="body1">
            Your favorite item is: {favoriteItem}.
          </Typography>
        </CardContent>
      </ClientInfoCard>
      
      <SectionTitle variant="h4">Featured Items</SectionTitle>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <FeaturedCard>
            <FeaturedCardMedia image={coffeeImage} title="Coffee" />
            <FeaturedCardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Coffee
              </Typography>
              <Typography>
                Enjoy our freshly brewed coffee made from the finest beans.
              </Typography>
            </FeaturedCardContent>
          </FeaturedCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeaturedCard>
            <FeaturedCardMedia image={dessertImage} title="Dessert" />
            <FeaturedCardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Dessert
              </Typography>
              <Typography>
                Indulge in our delicious desserts, perfect for any sweet tooth.
              </Typography>
            </FeaturedCardContent>
          </FeaturedCard>
        </Grid>
      </Grid>

      <SectionTitle variant="h4">Our Staff</SectionTitle>
      <Grid container spacing={4}>
        <EmployeeCard name="John Doe" role="Waiter" status="Active" imageUrl={waiter1} />
        <EmployeeCard name="Jane Smith" role="Waiter" status="Inactive" imageUrl={waiter2} />
        <EmployeeCard name="Robert Johnson" role="Chef" status="Active" imageUrl={chef1} />
        <EmployeeCard name="Emily Davis" role="Chef" status="Inactive" imageUrl={chef2} />
      </Grid>

      <SectionTitle variant="h4">Our Services</SectionTitle>
      <Typography paragraph>
        We offer a variety of services to ensure you have a wonderful experience at our café. From free Wi-Fi to a cozy reading corner, we have something for everyone.
      </Typography>
      <Typography paragraph>
        <strong>Free Wi-Fi:</strong> Stay connected while enjoying your favorite coffee.
      </Typography>
      <Typography paragraph>
        <strong>Reading Corner:</strong> Relax with a book in our cozy reading nook.
      </Typography>
      <Typography paragraph>
        <strong>Outdoor Seating:</strong> Enjoy the fresh air in our outdoor seating area.
      </Typography>

      <SectionTitle variant="h4">Contact Us</SectionTitle>
      <Typography paragraph>
        <strong>Address:</strong> 123 Café Street, Coffee City, CC 12345
      </Typography>
      <Typography paragraph>
        <strong>Phone:</strong> (123) 456-7890
      </Typography>
      <Typography paragraph>
        <strong>Email:</strong> contact@ourcafe.com
      </Typography>
      
      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="primary" href="/contact">
          Get in Touch
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default Home;
