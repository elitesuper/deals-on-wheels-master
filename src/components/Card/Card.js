import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import car1 from "../../assets/images/car1.png";
import "./Card.css";

export default function MediaCard({image,price,des}) {
  return (
    <div className='caard'>
       <Card sx={{ maxWidth: 350, m:'auto'}}>
      <CardMedia
        component="img"
        height="220"
        image={image}
        alt="green iguana"
        className="card-media"
      />
      <CardContent sx={{backgroundColor:"#E6E6E6"}}>
        <Typography sx={{fontWeight:"bold",fontSize:"16px",fontFamily:"jost"}}  gutterBottom variant="h6" component="div">
        {des}
        </Typography>
        <Typography sx={{fontWeight:"500",fontSize:"17px",fontFamily:"jost"}}  variant="body2" color="text.secondary">
        {price}
   
        </Typography>
      </CardContent>
      <CardActions sx={{backgroundColor:"#E6E6E6",padding:"10px"}}>
      <Button variant="contained" className='caard_btn' sx={{width:"100%",backgroundColor:"#D95050",fontFamily:"jost",paddingTop:"10px",paddingBottom:"10px",fontSize:"16px"}} endIcon={<ArrowRightAltIcon />}>
        Explore Now
      </Button>
      </CardActions>
    </Card>
    </div>
   
  );
}