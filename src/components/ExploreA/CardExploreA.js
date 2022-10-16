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


const CardExploreA = ({image}) => {
    return (
        <div>
                   <Paper elevation={3} sx={{backgroundColor:"#131313",padding:"10px",borderRadius:"5px"}} className="paper">
          <img  src={image} alt="" className="img" />
          <Box
            sx={{
              paddingX: 1,
            }}
          >
            <Typography sx={{color:"white"}} variant="subtitle1" component="h2">
              2022 Mustang GT
            </Typography>
          
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={1}
            >
                <Typography sx={{color:"white"}} variant="body2" component="p" marginLeft={0.5}>
                15.77
              </Typography>
            
              <Typography sx={{color:"#C9C9C9"}} variant="body2" component="p" marginLeft={0.5}>
              ($999.99)
              </Typography>
             
            </Box>
           <Button endIcon={<ArrowRightAltIcon/>} sx={{width:"100%",marginTop:"5px",backgroundColor:"#D95050"}} variant='contained'>Buy Now</Button>
          </Box>
        </Paper>
            
        </div>
    );
};

export default CardExploreA;