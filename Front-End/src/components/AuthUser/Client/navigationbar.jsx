import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/website/coffee_logo.png';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../components/Redux/authActions'; // Assuming you have a logout action
import { Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'; // Importing Material-UI components

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/client/home',
  },
  {
    id: 2,
    name: 'Menu',
    link: '/client/menu',
  },
  {
    id: 3,
    name: 'Services',
    link: '/client/service',
  },
  {
    id: 5,
    name: 'Commande',
    link: '/client/commande',
  },
  {
    id: 6,
    name: 'Contact',
    link: '/client/contact',
  },
];

const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture || null);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleProfilePictureChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const newProfilePicture = URL.createObjectURL(event.target.files[0]);
      setProfilePicture(newProfilePicture);
      // Here, you would also handle the actual upload to your server or storage solution
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div data-aos="fade-down" data-aos-once="true">
            <Link
              to="/"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} style={{ marginBottom: '25px' }} alt="Logo" className="w-14" />
              CafeBlack
            </Link>
          </div>

          {/* Link section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4"
          >
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="relative">
              <button onClick={toggleProfileMenu} className="flex items-center text-white focus:outline-none">
                {profilePicture ? (
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <FaUserCircle size={30} />
                )}
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10">
                  <div className="px-4 py-2">
                    <Typography variant="h6">{user?.name}</Typography>
                    <Typography variant="body2">Profile details go here...</Typography> {/* Add any profile details here */}
                  </div>
                  <div className="border-t border-gray-200">
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-black hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                  <div className="border-t border-gray-200">
                    <button
                      onClick={handleDialogOpen}
                      className="w-full px-4 py-2 text-left text-black hover:bg-gray-100"
                    >
                      Change Profile Picture
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Change Profile Picture</DialogTitle>
        <DialogContent>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="raised-button-file"
            type="file"
            onChange={handleProfilePictureChange}
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" component="span">
              Upload Photo
            </Button>
          </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NavigationBar;
