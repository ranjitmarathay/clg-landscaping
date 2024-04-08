import { Button, Container } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export default function GetQuoteButton(props){
  let navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, textAlign: "center" }}>
      <Button variant="contained" color="success" onClick={() => navigate('/quote')} sx={{ marginBottom: '20px', fontSize : '1.2rem' }}>
        {props.text ? props.text : "Request A Quote"}
      </Button>
    </Container>
  )
}