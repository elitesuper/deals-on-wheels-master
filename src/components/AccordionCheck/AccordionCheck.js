import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Grid } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./AccordionCheck.css";

const AccordionCheck = () => {
    return (
       
        <div style={{width:"100%"}}>
            
                
                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h6' className='select-text' sx={{fontSize:"19px",fontWeight:"700"}}>Select Brands</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
{/* check */}
          <FormGroup>
            <FormControlLabel control={<Checkbox  sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="Acura" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }} />} label="Audi" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="BMW" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="Buick" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="Acura" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="Audi" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="BMW" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }} />} label="buick" />
         
         </FormGroup>


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6' className='select-text' sx={{fontSize:"19px",fontWeight:"700"}}>Select Models</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox  sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="Acura" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }} />} label="Audi" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="BMW" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="Buick" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="Acura" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="Audi" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="BMW" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }} />} label="buick" />
         
         </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6' className='select-text' sx={{fontSize:"19px",fontWeight:"700"}}>Select Year</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox  sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="Acura" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }} />} label="Audi" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="BMW" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="Buick" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="Acura" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="Audi" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }}  />} label="BMW" />
            <FormControlLabel control={<Checkbox sx={{
          color: "#D95050",
          '&.Mui-checked': {
            color: "#D95050",
          },
        }} />} label="buick" />
         
         </FormGroup>
         
          </Typography>
        </AccordionDetails>
      </Accordion>
   


             
        
            
            
        </div>
       
    );
};

export default AccordionCheck;