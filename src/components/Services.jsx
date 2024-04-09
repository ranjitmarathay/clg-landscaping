import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";

import lawnCare from "../images/lawn_care.jpeg";
import pavers from "../images/pavers.jpeg";
import gardening from "../images/gardening.jpeg";
// import treeCare from "../images/tree-care.jpg";


function ServicesItem(props) {
  return (
    <Grid container spacing={2} sx={{ alignItems: "center", marginBottom: 2, marginTop: 2 }} direction={{ xs: "column", lg: "row" }}>
      <Grid item xs={12} lg={6}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <Typography variant="h5" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" } }}>
            {props.title}
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
            {props.text}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6} sx={{ alignContent: "center" }}>
      <Box
        component="img"
        src={props.image}
        sx={{
          width: { xs: "100%", lg: "100%" },
          height: { lg: "auto" },
          maxHeight: { xs: "500px", lg: "500px" }, 
          objectFit: "cover",
          objectPosition: "center",
          marginLeft: { lg: "auto" },
          marginRight: { lg: "auto" }
        }}
      />
      </Grid>
    </Grid>
  )
}

export default function Services(props) {

  if (props.landingPage){

  } else {
    return (
      <Container>
        <Typography variant="h3" sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" } }} color="#000000">
          Services
        </Typography>
        <ServicesItem
          title="Lawn Care"
          text="We provide comprehensive lawn care services to keep your grass green and healthy. Our services include mowing, edging, fertilizing, and weed control."
          image={lawnCare}
        />
        <ServicesItem
          title="Paving"
          text="Transform your outdoor space with our professional paving services. We specialize in installing beautiful and durable patios, walkways, and driveways."
          image={pavers}
        />
        <ServicesItem
          title="Gardening"
          text="Let us help you create and maintain a stunning garden. Our gardening services include planting, garden design, and ongoing maintenance."
          image={gardening}
        />
        <ServicesItem
          title="Mulching"
          text="Protect your plants and enhance your garden's appearance with our mulching services. We offer a variety of mulch types to suit your needs."
          image="https://i.pinimg.com/564x/9e/6a/f4/9e6af44b12e7afcb358b519d72008d13.jpg"
        />
        <ServicesItem
          title="Pruning"
          text="Keep your trees and shrubs healthy and well-shaped with our pruning services. We provide expert pruning to promote growth and improve plant health."
          image="https://i.pinimg.com/564x/4a/c1/71/4ac171e2aad517d6a4c06d83b12b46c1.jpg"
        />
      </Container>
    );
  }
}