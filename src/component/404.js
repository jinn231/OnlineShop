import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const UnknownPage = () => {
  return (
    <div style={{display:"flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "3rem"}}>
      <h1>404 </h1>
      <h1> NOT FOUND ! </h1>
      <Link to="/" style={{textDecoration: "none", marginTop: "1rem"}}>
        <Button variant="contained">Go Back To Home.</Button>
      </Link>
    </div>
  )
}

export default UnknownPage;
