import React from 'react';
import Container from '@mui/material/Container';
import "./Team.css";
import { Grid } from '@mui/material';
import TeamCard from './TeamCard';
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";


const Team = () => {
    return (
            <Container>
        <div className='team'>
                <h2>Our Dedicated  Team</h2>

                <Grid container spacing={2}  marginTop={6}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TeamCard image={team1} name={"Frank Nava"} desc={"Sales & Purchases, Customer Service"} phone={"+1 123456 78900"} site={"franknava@dealsonwheels.com"}/>

                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TeamCard image={team2} name={"Julius Boncatto"} desc={"Sales & Purchases, Customer Service"} phone={"+1 123456 78900"} site={"franknava@dealsonwheels.com"}/>
                        
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TeamCard image={team3} name={"Aisha"} desc={"Sales & Purchases, Customer Service"} phone={"+1 123456 78900"} site={"franknava@dealsonwheels.com"}/>
                        
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <TeamCard image={team1} name={"Frank Nava"} desc={"Sales & Purchases, Customer Service"} phone={"+1 123456 78900"} site={"franknava@dealsonwheels.com"}/>

                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                    <TeamCard image={team2} name={"Julius Boncatto"} desc={"Sales & Purchases, Customer Service"} phone={"+1 123456 78900"} site={"franknava@dealsonwheels.com"}/>
                        
                    </Grid>

                  

                    <Grid item xs={12} sm={6} md={4}>
                         <TeamCard image={team3} name={"Aisha"} desc={"Sales & Purchases, Customer Service"} phone={"+1 123456 78900"} site={"franknava@dealsonwheels.com"}/>
    
                     </Grid>

                </Grid>





              







               

            
        </div>
            </Container>
    );
};

export default Team;