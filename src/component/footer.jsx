import React from 'react';
import { Grid, IconButton, Link, Typography } from '@mui/material'; 
import { Stack } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Homefooter = () => {
  return (
    <div style={{padding: "3rem", background: "black", m:"0 auto"}}>
        <Grid container>
            <Grid item xs={12} sm={4} p={2}>
                <Stack direction="column" spacing={1} >
                    <Typography variant='title1' color="white" sx={{borderBottom: "1px solid gray", width: "20px"}}>HELP</Typography>
                    <Link href="#" variant='div' underline="none" color="white">Facebook</Link>
                    <Link href="#" variant='div' underline="none" color="white">Discord</Link>
                    <Link href="#" variant='div' underline="none" color="white">E-mail : jinn66490@gmail.com</Link>
                    <Link href="#" variant='div' underline="none" color="white">ph : +959778722528</Link>
                    <Stack direction="row" spacing={0} ml={0}>
                        <IconButton>
                            <FacebookIcon color="primary" />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon color="primary" />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon color="primary" />
                        </IconButton>
                        <IconButton>
                            <MailOutlineIcon color="primary" />
                        </IconButton>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={4} p={2}>
                <Stack direction="column" spacing={1} >
                    <Typography variant='title1' color="white" sx={{borderBottom: "1px solid gray", width: "40px"}} >ABOUT</Typography>
                    <Link href="#" variant='div' underline="none" color="white">Features</Link>
                    <Link href="#" variant='div' underline="none" color="white">Blog</Link>
                    <Link href="#" variant='div' underline="none" color="white">Overview</Link>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={4} p={2}>
                <Stack direction="column" spacing={1} >
                    <Typography variant='title1' color="white" sx={{borderBottom: "1px solid gray", width: "30px"}}>Policy</Typography>
                    <Link href="#" variant='div' underline="none" color="white">Developer</Link>
                    <Link href="#" variant='div' underline="none" color="white">Company</Link>
                </Stack>
            </Grid>
        </Grid>

        
      <center>
      <Typography variant="p" sx={{my: "1rem",color: "#fff", left: "0", right: "0"}}>Jinn &copy; Copyright 2022 All Right Reserved.</Typography>
      </center>
    </div>


  )
}

export default Homefooter;
