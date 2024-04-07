import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Header() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar position="static" color="transparent" sx={{ marginBottom: 4 }}>
    <Container maxWidth={false}>
      <Toolbar disableGutters sx={{ padding: '0px' }}>
        <Typography fontSize={{ xs: 22, sm: 28, md: 32, lg: 42 }} sx={{ flexGrow: 1 }}>
          Perfect Landscaping
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={() => { navigate("/"); handleClose(); }}>Home</MenuItem>
              <MenuItem onClick={() => { navigate("/about"); handleClose(); }}>About Us</MenuItem>
              <MenuItem onClick={() => { navigate("/services"); handleClose(); }}>Services</MenuItem>
              <MenuItem onClick={() => { navigate("/contact"); handleClose(); }}>Contact</MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
            <Button color="inherit" onClick={() => navigate("/")}>
              <Typography fontSize={{ xs: 10, sm: 15, md: 20, lg: 22 }}>Home</Typography>  
            </Button>
            <Button color="inherit" onClick={() => navigate("/about")}>
              <Typography fontSize={{ xs: 10, sm: 15, md: 20, lg: 22 }}>About Us</Typography>
            </Button>
            <Button color="inherit" onClick={() => navigate("/services")}>
              <Typography fontSize={{ xs: 10, sm: 15, md: 18, lg: 22 }}>Services</Typography>
            </Button>
            <Button color="inherit" onClick={() => navigate("/contact")}>
              <Typography fontSize={{ xs: 10, sm: 15, md: 20, lg: 22 }}>Contact</Typography>
            </Button>
            <Button variant="contained" color="success" onClick={() => navigate("/quote")}>
              <Typography fontSize={{ xs: 10, sm: 15, md: 20, lg: 22 }}>Get a Quote</Typography>
            </Button>
          </Box>
        )}
        {/* <Typography fontSize={{ xs: 10, sm: 15, md: 20, lg: 25 }} component="div" sx={{ ml: 2 }}>
          408-476-1238
        </Typography> */}
      </Toolbar>
    </Container>
  </AppBar>
  );
}
