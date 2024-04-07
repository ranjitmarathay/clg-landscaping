import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {

  let navigate = useNavigate();


  return (
    <AppBar position="static" color="transparent" sx={{ marginBottom: 4 }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Perfect Landscaping
          </Typography>
          <Button color="inherit" onClick={() => navigate("/")}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
          </Button>
          <Button color="inherit" onClick={() => navigate("/about")}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              About Us
            </Typography>
          </Button>
          <Button color="inherit" onClick={() => navigate("/services")}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Services
            </Typography>
          </Button>
          <Button color="inherit" onClick={() => navigate("/contact")}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Contact
            </Typography>
          </Button>
          <Button variant="contained" color="success" onClick={() => navigate("/quote")}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Get a Quote
            </Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
