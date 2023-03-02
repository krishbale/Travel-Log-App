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
import Link from '@mui/material/Link';
// import GlobalStyles from '@mui/material/GlobalStyles';
// import Container from '@mui/material/Container';



import {  useNavigate } from 'react-router-dom';
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
        
     
        <Link 
        href='/'
        variant="button"
        color="text.primary"
        sx={{ my: 1, mx: 1.5 }}     
        >
        HOME
        </Link>
        
        <Link 
        href='/signup'
        variant="button"
        color="text.primary"
        sx={{ my: 1, mx: 1.5 }}     
        >
        SIGN UP
        </Link>
        <Button   variant="outlined" sx={{ my: 1, mx: 1.5 }}>
        <Link 
        href='/login'
        variant="button"
        color="text.primary"
        sx={{ my: 1, mx: 1.5 }}     
        >
        LOG IN
        </Link>
        </Button>
         
     
     
      
        </>
      )
    } else{
      console.log('state is true')
      return (
        <>
        <nav>
        <Link 
        href='/'
        variant="button"
        color="text.primary"
        sx={{ my: 1, mx: 1.5 }}     
        >
        HOME
        </Link>
        
            <Link
              variant="button"
              href='/create'
              color="text.primary"
              sx={{ my: 1, mx: 1.5 }}
            >
             
            CREATE
             
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href='/update'
              sx={{ my: 1, mx: 1.5 }}
            >
              Update 
            </Link>
            
            <Link
              variant="button"
              color="text.primary"
              href='/view'
              sx={{ my: 1, mx: 1.5 }}
            >
              VIEW 
            </Link>
          </nav>
        
            
            <Button   variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            <Link
              variant="button"
              color="text.primary"
              href='/logout'
              sx={{ my: 1, mx: 1.5 }}
            >
              LOG OUT
            </Link>
            </Button>
            
          
       {/* <Link  to="/">Home</Link>
       <Link  to="/create">Create Log</Link>
       <Link  to="/update">Update Log</Link>
       <Link  to="/view">ViewLog</Link>
      <Link  to="/logout">Logout</Link> */}
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
            TRAVEL LOG
          </Typography>
          
          <RenderMenu />
        </Toolbar>
      </AppBar>
   
       
        
   
    
   
     

         

        
      
    </>
  )
}

export default Navbar