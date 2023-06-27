import React from "react";
import { Card, Button, TextField, Typography } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../Firebase/Config";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState(false);

  const Regeister = (e) => {
    e.preventDefault();

       createUserWithEmailAndPassword(auth , email, password)
        .then((auth) => {
            //it successfully create user
            navigate("/");
        })
        .catch(err => setError(true))
  }

  const Login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      navigate("/");
    })
    .catch(err => setError(true))
    
  }
 
  return (
    <>
      <img className="login__bg" src="https://media.istockphoto.com/photos/glitch-of-venus-head-on-light-background-3d-illustration-picture-id1351123976?b=1&k=20&m=1351123976&s=170667a&w=0&h=B2OrT2ZNBy2Eslsqsb-9jhno1sXvYkGOqhiCtIiYp-4=" style={{position:"absolute", zIndex: "-1", top: "0"}} width="100%" height="100%" alt="login bg" />
      <Card sx={{ opacity: "0.7",maxWidth: "300px", p: "2rem", mx: "auto", mt: "10rem", borderRadius: "20px", backgroundColor: "lightgray" }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: "600" }}>
          Regeister
        </Typography>
        <form>
          {
            error ? <Typography py={1} sx={{color: "red"}}>Something went wrong </Typography> : undefined
          }
          <TextField
            label="E-mail"
            variant="standard"
            sx={{ display: "block", my: "10px" }}
            fullWidth
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
            <TextField
            type="password"
            label="Password"
            variant="standard"
            sx={{ display: "block", my: "10px" }}
            fullWidth 
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button fullWidth type="submit" variant="contained" sx={{ my: "1rem", display:"block" }} onClick={Login}>
            Login
          </Button>
          <Typography noWrap variant="span" sx={{ fontSize: "1rem", my: "1rem" }}>
            Already have an account? Login 
         </Typography>
          <Button fullWidth type="submit" variant="contained" sx={{ my: "1rem" }} onClick={Regeister}>
            Sign Up
          </Button>
        </form>
      </Card>

      <center>
      <Typography variant="h5" position="fixed" sx={{my: "1rem",color: "#673ab7", bottom: "0", left: "0", right: "0"}}>JinnCopyright&copy;2022</Typography>
      </center>

    </>
  );
};
export default Signup;
