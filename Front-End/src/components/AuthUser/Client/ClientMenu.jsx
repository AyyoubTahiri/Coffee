import React, { useState, useEffect, useRef } from 'react';
import {
  Container, Typography, Grid, CardActions, Button, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Alert, MenuItem, Select, FormControl, InputLabel
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { styled } from '@mui/system';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProduits, getCategory, addToCart } from '../../Redux/authActions';
import photo from '../../../assets/website/coffee_logo.png';

// Styled components
const StyledAlert = styled(Alert)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(12),
  right: theme.spacing(2),
  zIndex: 1500,
  width: '300px',
  maxHeight: '400px',
  overflowY: 'auto',
  backgroundColor: '#333', // Background color for the alert
  color: '#fff', // Text color
  borderRadius: '10px', // Border radius
  padding: '10px', // Padding
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', // Box shadow
}));

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
    position: 'relative',
    flex: '0 0 240px',
    width: '240px',
    height: '320px',
    backgroundColor: '#333',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset rgba(255, 255, 255, 0.5) 0 0 0 6px',
    transition: '0.6s cubic-bezier(0.23, 1, 0.32, 1)',
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
      style={{ margin: '10px', transformStyle: 'preserve-3d', cursor: 'pointer' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div style={cardStyle}>
        <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', padding: '20px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', ...cardBgTransform, ...cardBgImage }}></div>
        <div style={{ padding: '20px', position: 'absolute', bottom: '0', color: '#fff', transform: 'translateY(40%)', transition: '0.6s cubic-bezier(0.215, 0.61, 0.355, 1)' }}>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '36px', fontWeight: '700', textShadow: 'rgba(0, 0, 0, 0.5) 0 10px 10px' }}>{header}</h1>
          <p style={{ opacity: '0', textShadow: 'rgba(0, 0, 0, 1) 0 2px 3px', transition: '0.6s cubic-bezier(0.23, 1, 0.32, 1)' }}>{content}</p>
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
  const [category, setCategory] = useState('All');
  const [likedItems, setLikedItems] = useState([]);
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const dispatch = useDispatch();
  const produits = useSelector((state) => state.auth.produits);
  const categories = useSelector((state) => state.auth.categories);

  useEffect(() => {
    dispatch(getProduits());
    dispatch(getCategory());
  }, [dispatch]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddItem = (item) => {
    const newItem = {
      ...item,
      quantity: 1,
      total: parseFloat(item.Prix),
    };
    dispatch(addToCart(newItem));
    setShowAlert(true);
    showToast(item.nomProduit + " added to cart!");
  };

  const handleLikeItem = (item) => {
    setLikedItems((prevLikedItems) =>
      prevLikedItems.includes(item.id)
        ? prevLikedItems.filter((id) => id !== item.id)
        : [...prevLikedItems, item.id]
    );
  };

  const handleOpenComments = (item) => {
    setCurrentItem(item);
    setCommentDialogOpen(true);
  };

  const handleCloseComments = () => {
    setCommentDialogOpen(false);
    setCurrentItem(null);
    setNewComment('');
  };

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // Handle comment submission logic
      console.log('Submitting comment:', newComment);
      setNewComment('');
      setCommentDialogOpen(false);
    }
  };

  const showToast = (itemName) => {
    toast.success(`${itemName} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const filteredProduits = category === 'All'
    ? produits
    : produits.filter((produit) => produit.idCategorie === category);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Menu
      </Typography>
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          value={category}
          onChange={handleCategoryChange}
          label="Category"
        >
          <MenuItem value="All">All</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container spacing={4}>
        {filteredProduits.map((produit) => (
          <Grid item key={produit.id} xs={12} sm={6} md={4}>
            <HoverCard
              dataImage={photo}
              header={produit.nomProduit}
              content={`Price: $${produit.Prix}`}
              onAddToCart={() => handleAddItem(produit)}
              onLike={() => handleLikeItem(produit)}
              liked={likedItems.includes(produit.id)}
              onOpenComments={() => handleOpenComments(produit)}
            />
          </Grid>
        ))}
      </Grid>

      {showAlert && (
        <StyledAlert severity="success" onClose={() => setShowAlert(false)}>
          Item added to cart!
          <Link to="/client/card" style={{ marginLeft: '5px', color: '#000' }}>View my cart</Link>
        </StyledAlert>
      )}
      <ToastContainer />

      <Dialog open={commentDialogOpen} onClose={handleCloseComments}>
        <DialogTitle>Comments for {currentItem && currentItem.nomProduit}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Your Comment"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseComments} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitComment} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ClientMenu;
