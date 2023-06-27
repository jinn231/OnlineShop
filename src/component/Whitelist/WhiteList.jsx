import axios from "axios";
import React, { useEffect } from 'react'
import { Grid,Typography, List, ListItem,IconButton, ListItemText } from "@mui/material";
import { useStateValue } from "../reducer/ContextProvider";
import useMediaQuery from "@mui/material/useMediaQuery";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DoubleBubble from "../DoubleBubble/DoubleBubble";

const WhiteList = () => {
    const [{fetchingData,whitelist}, dispatch] = useStateValue()
    const isActive = useMediaQuery("(min-width: 650px)");

    useEffect(() => {
        try {
            const response = axios.get("https://e-com-9d978-default-rtdb.asia-southeast1.firebasedatabase.app/Like.json");

            const ApiData = [];

            response.then((res) => {
                
                const {data} = res;
                
                for(const key in data){
                    ApiData.push(data[key])
                }

                dispatch({
                    type: "GET_FAVOURITE_DATA",
                    ApiData
                })

            })

        } catch (error) {
            console.log(error)
        }
    }, [dispatch])

    if(fetchingData){
        return(
            <DoubleBubble />
        )
    }else{
        return (
            <>
            {isActive&&(
                <Grid item xs={12} sm={6} >
                <Typography variant='h5' sx={{ textAlign: "center", my: 2, borderBottom: "1px solid lightgray" }} >Favourite Items</Typography>
                <List sx={{ borderBottom: "1px solid lightgray" }}>
                    {
                        whitelist.map(i =>
                            <ListItem
                                key={i.id}
                            >
                                <img src={i.image} alt="logo" width="150px" height="100px" />
    
                                <ListItemText
                                />
                                <Typography variant='span' px={2} >{i.text}<strong style={{ display: "block", margin: "5px" }}>$ {i.price}</strong>
                                    <IconButton>
                                        <FavoriteIcon />
                                    </IconButton>
                                </Typography>
    
                            </ListItem>
                        )
                    }
                </List>
            </Grid>
            )}
            {
                !isActive && (
                    <Grid item xs={12} sm={6} >
                    <Typography variant='h5' sx={{ textAlign: "center", my: 2, borderBottom: "1px solid lightgray" }} >Your Basket</Typography>
                        {
                            whitelist.map(i =>
                                <div key={i.id} style={{display: "flex", justifyContent: "flex-start", padding: "10px"}}>
                                   <img src={i.image} alt="logo" width="150px" height="100px" />
        
                                    <div sx={{display: "flex", flexDirection: "column"}}>
                                        <Typography variant="h5" px={2}>{i.title}</Typography>
                                        <Typography variant="h6" px={2} noWrap>Price : {i.price} $ </Typography>
                                        <IconButton sx={{padding: "0 15px"}}>
                                            <FavoriteIcon />
                                        </IconButton>
                                    </div>
    
                                </div>
                            )
                        }
                </Grid> 
                )
            }
        </>
        )
    }

   

}

export default WhiteList;
