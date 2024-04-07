import React, { useState } from 'react';
import { Container, Typography, Box, Image, ImageList, ImageListItem } from '@mui/material'; 
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Headline(){
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [images, setImages] = useState([
    "https://yardzen.com/wp-content/uploads/2022/07/Azek_project_11.jpg",
    "https://yardzen.com/wp-content/uploads/2022/07/robinson_4595-opal-cliff-drive-v2-4.jpeg",
    "https://yardzen.com/wp-content/uploads/2022/07/screen_shot_2021-10-04_at_3.24.03_pm.png",
    "https://yardzen.com/wp-content/uploads/2022/07/screen_shot_2020-12-18_at_2.00.02_pm.png",
    // "https://yardzen.com/wp-content/uploads/2022/07/6zYM0pYDwNUhz4At4t4wMSMHQPT2.b1163315-7c7d-4424-9d77-7a5da3a9db5a.1629775754341.jpg",
    // "https://yardzen.com/wp-content/uploads/2022/07/screen_shot_2021-09-27_at_12.19.51_pm.png",
  ]);

  return (
  <Container maxWidth="lg" sx={{ marginTop: 4, textAlign: "center" }}>
    <Box>
    <Typography fontSize={{ xs: 20, sm: 30, md: 40, lg: 50 }} component="div" sx={{ flexGrow: 1 }}>
      Where Nature Meets Artisry
    </Typography>
    </Box>
    <Box>
      <Typography fontSize={{ xs: 15, sm: 20, md: 25, lg: 30 }} component="div" sx={{ flexGrow: 1 }}>
        Trusted by 100+ Austinites
      </Typography>
    </Box>
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <ImageList cols={isMobile ? 2 : 4} rowHeight={isMobile ? 200 : 400}>
        {images.map((item) => (
          <ImageListItem key={item}>
            <img
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>

    
  </Container>
  );
}