import React from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import TableService from '../../../assets/website/TableService.png';
import TakeawayService from '../../../assets/website/TakeawayService.png';
import RelaxationArea from '../../../assets/website/RelaxationArea.png';
import WaiterSix from '../../../assets/website/servursSix.png';
import WaiterThree from '../../../assets/website/servursThree.png';
import WaiterFive from '../../../assets/website/servursFive.png';
import ChefOne from '../../../assets/website/chef2.png';
import ChefFour from '../../../assets/website/chef3.png';
import Manager from '../../../assets/website/mandger.png';

const ServiceClient = () => {
  const style = {
    pageContainer: {
      minHeight: '100vh', // Ensures minimum height but allows container to grow with content
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#fff3e0', // Unified background color
      padding: '20px',
      overflowY: 'auto' // Auto-scroll appears only if necessary
    },
    headerContainer: {
      marginBottom: '20px',
      textAlign: 'center',
      backgroundColor: 'rgba(255, 243, 224, 0.8)', // Transparent background for readability
      padding: '10px',
      borderRadius: '8px'
    },
    cardContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '20px'
    },
    card: {
      width: '300px',
      margin: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent background for readability
      borderRadius: '8px'
    },
    media: {
      height: '140px'
    },
    header: {
      marginBottom: '10px',
      color: '#3e2723'
    },
    subheader: {
      marginBottom: '20px',
      color: '#5d4037'
    },
    sectionHeader: {
      margin: '20px 0',
      color: '#6d4c41'
    }
  };

  return (
    <div style={style.pageContainer}>
      <div style={style.headerContainer}>
        <Typography variant="h3" style={style.header}>
          Welcome to Café de Ayyoub Tahiri
        </Typography>
        <Typography variant="h6" style={style.subheader}>
          Experience top-quality Arabica beans, carefully roasted for a unique taste.
        </Typography>
      </div>
      <Typography variant="h5" style={style.sectionHeader}>
        Our Services
      </Typography>
      <div style={style.cardContainer}>
        <Card style={style.card}>
          <CardMedia
            component="img"
            style={style.media}
            image={TableService}
            title="Table Service"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Table Service
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Enjoy direct table service from our skilled servers in a cozy setting.
            </Typography>
          </CardContent>
        </Card>
        <Card style={style.card}>
          <CardMedia
            component="img"
            style={style.media}
            image={TakeawayService}
            title="Takeaway Service"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Takeaway Service
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Quick and convenient coffee on the go at any time.
            </Typography>
          </CardContent>
        </Card>
        <Card style={style.card}>
          <CardMedia
            component="img"
            style={style.media}
            image={RelaxationArea}
            title="Relaxation Area"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Relaxation Area
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A comfortable spot to read, work, or just relax and unwind.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Typography variant="h3" style={style.sectionHeader}>
        Our Team
      </Typography>
      <div style={style.cardContainer}>
        <Card style={style.card}>
          <CardMedia
            component="img"
            style={style.media}
            image={Manager}
            title="Manager"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Ayyoub Tahiri - Manager
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Leading our team with passion and dedication to excellence.
            </Typography>
          </CardContent>
        </Card>
        <Card style={style.card}>
          <CardMedia
            component="img"
            style={style.media}
            image={ChefOne}
            title="Chef"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              AbdSamad - Chef
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Crafting delicious creations with a touch of culinary artistry.
            </Typography>
          </CardContent>
        </Card>
        <Card style={style.card}>
          <CardMedia
            component="img"
            style={style.media}
            image={ChefFour}
            title="Chef"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Aymane - Chef
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Bringing flavors to life with expertise and innovation.
            </Typography>
          </CardContent>
        </Card>
        <Card style={style.card}>
          <CardMedia
            component="img"
            style={style.media}
            image={WaiterThree}
            title="Waiter"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Waiter Shaymae
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Providing friendly and attentive service with a smile.
            </Typography>
          </CardContent>
        </Card>
        <Card style={style.card}>
          <CardMedia
            component="img"
            style={style.media}
            image={WaiterFive}
            title="Waiter"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Waiter Youssef
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ensuring every guest enjoys a memorable café experience.
            </Typography>
          </CardContent>
        </Card>
        <Card style={style.card}>
          <CardMedia
            component="img"
            style={style.media}
            image={WaiterSix}
            title="Waiter"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Waiter Aans
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ensuring every guest enjoys a memorable café experience.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceClient;
