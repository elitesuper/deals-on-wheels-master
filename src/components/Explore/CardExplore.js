import React from 'react';
import { AccessTime } from "@mui/icons-material";
import {
    Button,
  createTheme,
  Grid,
  Paper,
  Rating,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import nft1 from "../../assets/images/nft1.png";
import "./CardExplore.css";

const CardExplore = ({nft}) => {
    return (
        <div>
                   <Paper elevation={3} sx={{backgroundColor:"#131313",padding:"10px",borderRadius:"5px",paddingBottom:"15px"}} className="paper">
          <img  src={nft1} alt="" className="img" />
          
          <Box
            sx={{
              paddingX: 1,
            }}
          >
            <h4 color='white' className='text_little'>{nft}</h4>
            <Typography className='ce-title' sx={{color:"white"}} variant="subtitle1" component="h2">
              2022 Mustang GT
            </Typography>
          
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={1}
            >
              <div className='expolre__card__title'>
              <i className='ce-eath fa-brands fa-ethereum' style={{color:"white"}}></i>
              <Typography sx={{color:"white"}} variant="body2" component="p" marginLeft={0}>
                15.77
              </Typography>
            
              <Typography sx={{color:"#C9C9C9"}} variant="body2" component="p" marginLeft={0.5}>
              ($999.99)
              </Typography>
              </div>
               
             
            </Box>
           <Button endIcon={<ArrowRightAltIcon/>} sx={{width:"100%",marginTop:"5px",backgroundColor:"#D95050"}} variant='contained'>Buy Now</Button>
          </Box>
        </Paper>
            
        </div>
    );
};

export default CardExplore;