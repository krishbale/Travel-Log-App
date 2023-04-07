import React, { useContext } from 'react'

import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import GlobalStyles from '@mui/material/GlobalStyles';
// import Container from '@mui/material/Container';



import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/logo2.png";
import {  UserContext } from '../App';
const Navbar = () => {
  const navigate = useNavigate();
  const {state,dispatch} = useContext(UserContext);
  const RenderMenu = () => {
    if(state==="false"){
      console.log("state is falsed")
      return(
        
        <>
             <Link style={{paddingLeft: 13, textDecoration: 'none'}} to='/'>
              <Button style={{paddingLeft: 13, textDecoration: 'none'}} sx={{ my: 1, mx: 1.5 }}    variant="text">HOME</Button>
              </Link>
              <Link style={{paddingLeft: 13, textDecoration: 'none'}} to='/signup'>
              <Button  sx={{ my: 1, mx: 1.5 }}    variant="text">SIGN UP</Button>
              </Link>
              <Link style={{paddingLeft: 13, textDecoration: 'none'}} to='/login'>
              <Button  sx={{ my: 1, mx: 1.5 }}    variant="contained">SIGN IN</Button>
              </Link>

        
     
    
     
     
      
        </>
      )
    } else{
      console.log('state is true')
      return (
        <>
        <nav>
              <Link style={{paddingLeft: 13, textDecoration: 'none'}} to='/'>
              <Button  style={{paddingLeft: 13, textDecoration: 'none'}} sx={{ my: 1, mx: 1.5 }}    variant="text">HOME</Button>
              </Link>
               <Link style={{paddingLeft: 13, textDecoration: 'none'}} to='/create'>
              <Button  sx={{ my: 1, mx: 1.5 }}    variant="text">CREATE</Button>
              </Link>
              <Link style={{paddingLeft: 13, textDecoration: 'none'}} to='/update'>
              <Button  sx={{ my: 1, mx: 1.5 }}    variant="text">UPDATE</Button>
              </Link>
              <Link style={{paddingLeft: 13, textDecoration: 'none'}} to='/view'>
              <Button  sx={{ my: 1, mx: 1.5 }}    variant="text">EXPLORE</Button>
              </Link>
              <Link style={{paddingLeft: 13, textDecoration: 'none'}} to='/logout'>
              <Button  sx={{ my: 1, mx: 1.5 }}    variant="contained">LOG OUT</Button>
              </Link>
          </nav>
        
           
        </>
  
      )
    }
  

  }
  return (
    <>
        <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            TRAVEL DIARY
          </Typography>
          
          <RenderMenu />
        </Toolbar>
      </AppBar>
   
       
        
   
    
   
     

         

        
      
    </>
  )
}

export default Navbar