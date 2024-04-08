import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import GetQuoteButton from './GetQuoteButton';

import landscaper from '../images/landscaper.jpeg';

export default function AboutUs() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          About Perfect Landscaping
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
          We are dedicated to creating beautiful and sustainable outdoor spaces that enhance your quality of life and contribute to environmental conservation. Our team of skilled professionals brings passion, expertise, and creativity to every project.
        </Typography>
      </Box>

      <Grid container spacing={4} my={4}>
        <Grid item xs={6} sm={6}>
          <Paper elevation={3}>
            <Box
              component="img"
              src={landscaper}
              alt="Random landscape"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box my={4}>
            <Typography variant="h4" gutterBottom>
              Our Philosophy
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
              At the heart of our philosophy is a deep respect for nature and a commitment to sustainable practices. We believe that landscaping and gardening should be in harmony with the environment, promoting biodiversity and ecological balance. Our designs are tailored to your unique needs and preferences, while also considering the local climate and ecosystem.
            </Typography>
          </Box>
          <Box my={4}>
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
              Have questions or want to schedule a consultation? Call us at (123) 456-7890.
            </Typography>
            <GetQuoteButton text="Get An Instant Quote"/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
