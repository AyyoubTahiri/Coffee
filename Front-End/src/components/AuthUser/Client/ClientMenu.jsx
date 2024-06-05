import React, { useState, useRef, useEffect } from 'react';
import {
  Container, Typography, Grid, CardActions, Button, IconButton, Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Alert, MenuItem, Select, FormControl, InputLabel
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Import the CartContext
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cafee from '../../../assets/grandBack.png';

// Styled components
const StyledAlert = styled(Alert)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(8),
  right: theme.spacing(2),
  zIndex: 1500,
  width: '300px',
  maxHeight: '400px',
  overflowY: 'auto',
}));

const cardWrapStyles = {
  margin: '10px',
  transform: 'perspective(800px)',
  transformStyle: 'preserve-3d',
  cursor: 'pointer',
};

const cardStyles = {
  position: 'relative',
  flex: '0 0 240px',
  width: '240px',
  height: '320px',
  backgroundColor: '#333',
  overflow: 'hidden',
  borderRadius: '10px',
  boxShadow: 'rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset rgba(255, 255, 255, 0.5) 0 0 0 6px',
  transition: '0.6s cubic-bezier(0.23, 1, 0.32, 1)',
};

const cardBgStyles = {
  opacity: '0.5',
  position: 'absolute',
  top: '-20px',
  left: '-20px',
  width: '100%',
  height: '100%',
  padding: '20px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  transition: '0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
  pointerEvents: 'none',
};

const cardInfoStyles = {
  padding: '20px',
  position: 'absolute',
  bottom: '0',
  color: '#fff',
  transform: 'translateY(40%)',
  transition: '0.6s cubic-bezier(0.215, 0.61, 0.355, 1)',
};

const cardInfoAfterStyles = {
  content: '""',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '0',
  width: '100%',
  height: '100%',
  backgroundImage: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%)',
  backgroundBlendMode: 'overlay',
  opacity: '0',
  transform: 'translateY(100%)',
  transition: '0.6s cubic-bezier(0.23, 1, 0.32, 1)',
};

const cardInfoH1Styles = {
  fontFamily: '"Playfair Display", serif',
  fontSize: '36px',
  fontWeight: '700',
  textShadow: 'rgba(0, 0, 0, 0.5) 0 10px 10px',
};

const cardInfoPStyles = {
  opacity: '0',
  textShadow: 'rgba(0, 0, 0, 1) 0 2px 3px',
  transition: '0.6s cubic-bezier(0.23, 1, 0.32, 1)',
};

const coffeeTypes = [
  { name: 'Espresso', description: 'Strong black coffee', category: 'coffee', price: 5.00, comments: [], likes: 0, image: cafee },
  { name: 'Cappuccino', description: 'Espresso mixed with steamed milk foam', category: 'coffee', price: 6.00, comments: [], likes: 0, image: cafee },
  { name: 'Latte', description: 'Espresso with steamed milk and a layer of foam', category: 'coffee', price: 6.50, comments: [], likes: 0, image: cafee },
  { name: 'Mocha', description: 'Espresso with chocolate and steamed milk', category: 'coffee', price: 6.75, comments: [], likes: 0, image: cafee },
  { name: 'Black Tea', description: 'Classic black tea', category: 'tea', price: 3.50, comments: [], likes: 0, image: cafee },
  { name: 'Green Tea', description: 'Fresh green tea', category: 'tea', price: 3.75, comments: [], likes: 0, image: cafee },
  { name: 'Herbal Tea', description: 'A soothing herbal blend', category: 'tea', price: 4.00, comments: [], likes: 0, image: cafee },
  { name: 'Cheesecake', description: 'Creamy cheesecake with a graham cracker crust', category: 'dessert', price: 5.50, comments: [], likes: 0, image: cafee },
  { name: 'Chocolate Cake', description: 'Rich chocolate cake with chocolate frosting', category: 'dessert', price: 6.00, comments: [], likes: 0, image: cafee },
];

const HoverCard = ({ dataImage, header, content, onAddToCart, onLike, liked, onOpenComments }) => {
  const cardRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 });
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

  useEffect(() => {
    const { offsetWidth: width, offsetHeight: height } = cardRef.current;
    setDimensions({ width, height });
  }, []);

  const handleMouseMove = (e) => {
    const { left, top } = cardRef.current.getBoundingClientRect();
    const mouseX = e.pageX - left - dimensions.width / 2;
    const mouseY = e.pageY - top - dimensions.height / 2;
    setMousePosition({ mouseX, mouseY });
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(setTimeout(() => {
      setMousePosition({ mouseX: 0, mouseY: 0 });
    }, 1000));
  };

  const { mouseX, mouseY } = mousePosition;
  const { width, height } = dimensions;
  const mousePX = mouseX / width;
  const mousePY = mouseY / height;
  const cardStyle = {
    ...cardStyles,
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
  };
  const cardBgTransform = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
  };
  const cardBgImage = {
    backgroundImage: `url(${dataImage})`,
  };

  return (
    <div
      style={cardWrapStyles}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div style={cardStyle}>
        <div style={{ ...cardBgStyles, ...cardBgTransform, ...cardBgImage }}></div>
        <div style={cardInfoStyles}>
          <h1 style={cardInfoH1Styles}>{header}</h1>
          <p style={cardInfoPStyles}>{content}</p>
        </div>
        <CardActions style={{ justifyContent: 'center', padding: '10px', transition: 'opacity 0.3s', opacity: mouseX === 0 && mouseY === 0 ? 0 : 1 }}>
          <Button size="small" onClick={onAddToCart}>
            <ShoppingCartIcon /> Add to Cart
          </Button>
          <IconButton
            aria-label="add to favorites"
            color={liked ? "error" : "default"}
            onClick={onLike}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="comment" onClick={onOpenComments}>
            <CommentIcon />
          </IconButton>
        </CardActions>
      </div>
    </div>
  );
};

const ClientMenu = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('coffee');
  const [likedItems, setLikedItems] = useState([]);
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const { cartItems, addItemToCart } = useCart(); // Use the addItemToCart and cartItems from CartContext

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddItem = (item) => {
    addItemToCart(item);
    setShowAlert(true); // Show alert with buttons
    showToast(item.name + " added to cart!");
  };

  const handleLikeItem = (item) => {
    if (likedItems.includes(item)) {
      setLikedItems(likedItems.filter((likedItem) => likedItem !== item));
    } else {
      setLikedItems([...likedItems, item]);
    }
  };

  const openComments = (item) => {
    setCurrentItem(item);
    setCommentDialogOpen(true);
  };

  const addComment = () => {
    if (newComment.trim()) {
      currentItem.comments.push(newComment);
      setNewComment('');
    }
  };

  const showToast = (message) => {
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const filteredItems = coffeeTypes.filter(item => item.category === category);

  return (
    <Container maxWidth="md">
      <ToastContainer />
      <Typography variant="h4" align="center" gutterBottom>
        Menu Café
      </Typography>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-start' }}>
        <FormControl>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            label="Category"
            onChange={handleCategoryChange}
          >
            <MenuItem value="coffee">Coffee</MenuItem>
            <MenuItem value="tea">Tea</MenuItem>
            <MenuItem value="dessert">Dessert</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={2}>
        {filteredItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <HoverCard
              dataImage={item.image}
              header={item.name}
              content={item.description}
              onAddToCart={() => handleAddItem(item)}
              onLike={() => handleLikeItem(item)}
              liked={likedItems.includes(item)}
              onOpenComments={() => openComments(item)}
            />
          </Grid>
        ))}
      </Grid>
      <Dialog open={commentDialogOpen} onClose={() => setCommentDialogOpen(false)}>
        <DialogTitle>Comments</DialogTitle>
        <DialogContent>
          {currentItem && currentItem.comments && currentItem.comments.map((comment, index) => (
            <Typography key={index}>{comment}</Typography>
          ))}
          <TextField
            autoFocus
            margin="dense"
            id="new-comment"
            label="Add a comment"
            fullWidth
            variant="standard"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCommentDialogOpen(false)}>Cancel</Button>
          <Button onClick={addComment}>Add Comment</Button>
        </DialogActions>
      </Dialog>
      {showAlert && (
        <StyledAlert severity="success">
          Item added to cart!
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Button color="inherit" size="small" onClick={() => navigate('/client/card')}>View My Cart</Button>
            <Button color="inherit" size="small" onClick={() => setShowAlert(false)}>Continue Shopping</Button>
          </Box>
        </StyledAlert>
      )}
    </Container>
  );
};

export default ClientMenu;
