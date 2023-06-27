import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import "swiper/css";
import "swiper/css/pagination";
import './ProductsSlide.css';
import { Grid, Typography } from '@mui/material';
import { Pagination } from "swiper";

const HomepageSlides = () => {
    const isActive = useMediaQuery("(max-width: 716px)");

  return (
    <>
        {isActive && (
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Grid container>
                <Grid item xs={12} p={3}>
                    <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="logo" />
                </Grid>
            </Grid>
        </SwiperSlide>
        <SwiperSlide>
            <Grid container>
                <Grid item xs={12} p={3}>
                    <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="logo" />
                </Grid>
            </Grid>
        </SwiperSlide>
        <SwiperSlide>
            <Grid container>
                <Grid item xs={12} p={3}>
                    <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="logo" />
                </Grid>
            </Grid>
        </SwiperSlide>
        <SwiperSlide>
            <Grid container>
                <Grid item xs={12} p={3}>
                    <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="logo" />
                </Grid>
            </Grid>
        </SwiperSlide>
        <SwiperSlide>
            <Grid container>
                <Grid item xs={12} p={3}>
                    <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="logo" />
                </Grid>
            </Grid>
        </SwiperSlide>
       
      </Swiper>
    )}
    {
        !isActive && (
            <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
                <Grid container>
                    <Grid item xs={6} p={3} sx={{my: "90px"}}>
                        <Typography variant="h3">What are you looking for ?</Typography>
                        <Typography variant="h5">Laptop</Typography>
                        <Typography variant="h5">Price : 442 $</Typography>
                    </Grid>
                    <Grid item xs={6} p={3}>
                        <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="logo" />
                    </Grid>
                </Grid>
            </SwiperSlide>
            <SwiperSlide>
                <Grid container>
                    <Grid item xs={6} p={3} sx={{my: "140px"}}>
                        <Typography variant="h3">What are you looking for ?</Typography>
                        <Typography variant="h5">Laptop</Typography>
                        <Typography variant="h5">Price : 442 $</Typography>
                    </Grid>
                    <Grid item xs={6} p={3}>
                        <img src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="logo" />
                    </Grid>
                </Grid>
            </SwiperSlide>
            <SwiperSlide>
                <Grid container>
                    <Grid item xs={6} p={3} sx={{my: "140px"}}>
                        <Typography variant="h3">What are you looking for ?</Typography>
                        <Typography variant="h5">Laptop</Typography>
                        <Typography variant="h5">Price : 442 $</Typography>
                    </Grid>
                    <Grid item xs={6} p={3}>
                        <img src="https://images.unsplash.com/photo-1666718885155-be10a011641a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="logo" />
                    </Grid>
                </Grid>
            </SwiperSlide>           
          </Swiper>
        )
    }
   
    </>
    
  )
}

export default HomepageSlides;
