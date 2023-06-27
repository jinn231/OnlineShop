import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Stack } from '@mui/system';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './Basket.css'
import { useStateValue } from '../reducer/ContextProvider';
import { getBasketTotal } from '../reducer/reducer';
import logo from "./../../logo.png";
import Box from '@mui/material/Box/Box';
import { Link } from 'react-router-dom';


const Basket = () => {
    const [{basket, user}, dispatch] = useStateValue();

    const isActive = useMediaQuery("(min-width: 1000px)");
    let Totalvalue = getBasketTotal(basket)

    const remove_from_basket = (id) => {
        dispatch(
            {
                type: "REMOVE_FROM_BASKET",
                id: id
            }
        )
    }

    if(basket.length !== 0){

        return (
            <>
                {isActive && (
                    <Grid container>
                        <Grid item xs={12} sm={6} >
                            <Typography variant='h5' sx={{textAlign: "center", my: 2, borderBottom: "1px solid lightgray"}} >Your Basket</Typography>
                            <List sx={{borderBottom: "1px solid lightgray"}}>
                                {
                                    basket.map(i => 
                                        <ListItem
                                        key={i.id}
                                        secondaryAction={
                                            <IconButton onClick={() => remove_from_basket(i.id)} edge="end" aria-label="delete">
                                                <DeleteIcon  />
                                            </IconButton>
                                        }
                                        >
                                        <img src={i.img} alt={i.key} width="150px" height="100px" />
                
                                        <ListItemText
                                        />
                                        <Typography variant='span' p={2} >{i.text}<strong style={{display: "block", margin: "5px"}}>$ {i.price}</strong></Typography>
                                        </ListItem>       
                                    )
                                }
                            </List>
                        </Grid>
        
                        <Grid item xs={6} p={2} position="fixed" sx={{right: "0"}}>
                        <Swiper navigation={true} m={2} modules={[Navigation]} className="mySwiper">
                            {basket.map(i => (
                                <SwiperSlide key={i.id}><img src={i.img} alt='select item' /></SwiperSlide>
                            ))}
                        </Swiper>
                        <Stack>
                            <Typography variant="h5" pt={2}>{user?`Hello ${user.email}`:""}</Typography>
                            <Typography variant='p' pt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur architecto laborum eos illo voluptates quibusdam molestias dolorum, corporis porro possimus cumque dolores, doloremque laboriosam dolore fugit suscipit ad unde.</Typography>
                            <Typography variant='h6' py={1}>Items : <strong> {basket.length}</strong></Typography>
                            <Typography variant='h6'>Total : $ {Totalvalue}</Typography>
                            <Link to="/payment"  style={{textDecoration: "none"}}>
                                <Button variant='contained' sx={{alignSelf:"start",mt: "5px"}} >Payment</Button>
                            </Link>
                            <Link to={user?null:"/signup"}  style={{textDecoration: "none"}}>
                                <Button sx={{alignSelf:"start",mt: "5px" }} disableTouchRipple disableFocusRipple>{!user?`If you don't have an account, Please SignUp First.`:""}</Button>                            
                            </Link>
                        </Stack>                    
        
                        </Grid>
                    </Grid>
                    )}
                {!isActive && (
                                <Grid container sx={{overflowX: "hidden"}}>
                                <Grid item xs={12} >
                                    <Typography variant='h5' sx={{textAlign: "center", my: 2, borderBottom: "1px solid lightgray"}} >Your Basket</Typography>
                                    <Stack sx={{textAlign: "end", padding: "1rem", alignItems: "end"}}>
                                        <Typography py={1} >TOTAL : $ {Totalvalue} </Typography>
                                        <Button variant='outlined'>Payment</Button> 
                                    </Stack>
                                    {basket.map(i => (
                                        <Stack key={i.id} direction="row" spacing={3} mx={1} sx={{borderBottom: "1px solid lightgray", padding: "10px"}}>
                                            <img src={i.img} alt={i.title} width="150px" height="100px" />
                                            <Stack spacing={1}>
                                                <Typography variant='h5'>Shop</Typography>
                                                <Typography variant='p' noWrap component="strong">Price : $ {i.price}</Typography>     
                                                <Button variant='outlined' endIcon={<DeleteIcon />} onClick={() => remove_from_basket(i.id)} size="small">Remove</Button>
                                            </Stack>                                  
                                        </Stack>    
                                    ))}
                                </Grid>
                            </Grid>
                )} 
            </>
        )
    }else{
        return(
            <>
            <Box sx={{textAlign: "center"}}>
                <Typography variant='h5' sx={{textAlign: "center", my: 2, borderBottom: "1px solid lightgray"}} >Your Basket</Typography>
                <img src={logo} alt="basket__logo" className='empty__basket__logo' />
                <Typography variant='h5' p={2}>Nothing In Your Basket </Typography>
            </Box>
            </>
        )
    }
}

export default Basket;
