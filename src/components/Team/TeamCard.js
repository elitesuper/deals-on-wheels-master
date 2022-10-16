import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./TeamCard.css";

export default function TeamCard({name,desc,phone,site,image}) {
  return (
    <Card sx={{ maxWidth: 345, m:'auto' }} className="team-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="green iguana"
          sx={{borderRadius: "10px"}}
        />
        <CardContent sx={{backgroundColor:"transparent",boxShadow:"none",border:"0"}}>
          <h5  >
            {name}
          </h5>
          <p className='desc' >
            {desc}
         
          </p>
          <p className='phone'>
            {phone}
         
          </p>
          <p className='site'>
            {site}
         
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}