import React from 'react';
import { Stack, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MuiCard from './Product';
import './Home.css'
import CustomizedAccordions from './FAQ';
import HomepageSlides from './HomepageSlides';
import SelectedItems from './SelectedItems';
import { useStateValue } from '../reducer/ContextProvider';
import Homefooter from '../footer';

const linkStyle = {
     margin: "1rem",
     textDecoration: "none",
     padding: "10px",
     textAlign: "center"
   };
 
const Home = () => {

     const [{togleBasket}, dispatch] = useStateValue();

     const handleCloseItems = () => {
          dispatch({
               type: "REMOVE_ALL_FROM_TOGLE_BASKET"
          })
     }

  return (
     <>
          <HomepageSlides />
          <div className="click-item-container">
               <SelectedItems />
               <Button variant='contained' sx={{display: togleBasket.length === 0? "none" : "block",background:"grey" , my:"10px"}} onClick={handleCloseItems} fullWidth> Clear All</Button>
          </div>
          <Stack spacing={4} my={10}>
               <Typography variant="h2" sx={{fontWeight:"1600px", textAlign:"center"}} >Best Selling Products</Typography>
               <Stack direction='row' spacing={3}>
                    <Grid container>
                         <Grid item xs={12} sm={4} p={4}>
                              <MuiCard id={1} price={231} img="https://plus.unsplash.com/premium_photo-1664299690387-686c2a89eb74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" title="Shirt" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptate commodi dolores tenetur praesentium amet animi iste repellat sapiente. Expedita fuga a enim rerum dignissimos nihil blanditiis dolores veritatis quisquam!" />  
                         </Grid>
                         <Grid item xs={12} sm={4} p={4}>
                              <MuiCard id={2} price={301} img="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="Laptop" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptate commodi dolores tenetur praesentium amet animi iste repellat sapiente. Expedita fuga a enim rerum dignissimos nihil blanditiis dolores veritatis quisquam!" />  
                         </Grid>
                         <Grid item xs={12} sm={4} p={4}>
                              <MuiCard id={3} price={100} img="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" title="i-PHONE" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptate commodi dolores tenetur praesentium amet animi iste repellat sapiente. Expedita fuga a enim rerum dignissimos nihil blanditiis dolores veritatis quisquam!"/>  
                         </Grid>
                    </Grid>  
               </Stack>
               <Stack direction="row" spacing={2}>
                    <Grid container>
                         <Grid item xs={12} sm={6} p={4}>
                              <MuiCard id={4} price={80} img="https://media.istockphoto.com/photos/flying-gamer-gears-like-mouse-keyboard-joystick-headset-vr-microphone-picture-id1329045610?b=1&k=20&m=1329045610&s=170667a&w=0&h=0g2xPf4oyGVbLvET3ijeEpk4Jh1BXNgEnp-ixU2YY5Y=" title="Shop" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptate commodi dolores tenetur praesentium amet animi iste repellat sapiente. Expedita fuga a enim rerum dignissimos nihil blanditiis dolores veritatis quisquam!" />  
                         </Grid>
                         <Grid item xs={12} sm={6} p={4}>
                              <MuiCard id={5} price={410} img="https://images.unsplash.com/photo-1559070081-648fb00b2ed1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFjY2Vzc29yaWVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="Shop" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptate commodi dolores tenetur praesentium amet animi iste repellat sapiente. Expedita fuga a enim rerum dignissimos nihil blanditiis dolores veritatis quisquam!" />  
                         </Grid>
                    </Grid>  
               </Stack>
               <Stack>
                    <Grid container>
                         <Grid item xs={12} sm={12} p={4}>
                              <MuiCard id={6} price={99} img="https://images.unsplash.com/photo-1584378687113-8739c327634c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d3Jpc3R3YXRjaHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" title="Shop" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptate commodi dolores tenetur praesentium amet animi iste repellat sapiente. Expedita fuga a enim rerum dignissimos nihil blanditiis dolores veritatis quisquamLorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptate commodi dolores tenetur praesentium amet animi iste repellat sapiente. Expedita fuga a enim rerum dignissimos nihil blanditiis dolores veritatis quisquam!" />  
                         </Grid>
                    </Grid>  
               </Stack>

               <Link to="/" style={linkStyle}>
                    <Typography variant='h6' component="div" sx={{borderBottom: "1px solid lightgray", pb: "3rem"}}>
                         See More Products
                    </Typography>
               </Link>

                    <Typography variant="h5" sx={{textAlign:"center"}} noWrap>What is FAQ ?</Typography>
                    <Typography variant="div" sx={{textAlign:"center", fontWeight:"600", pb: "1rem"}} my={2} >A document that provides answers to a list of typical questions that users might ask regarding a particular subject</Typography>
                    <CustomizedAccordions />
          </Stack>
          <Homefooter />
     </>
  )
}

export default Home;
