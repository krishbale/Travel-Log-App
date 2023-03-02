
import React,{useState,useEffect} from 'react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import signpic from "../images/signup.svg";
import {  useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Createlog() {
  const history = useNavigate();
  const [user,setUser] = useState({
    title:"",descriptions:"",days:"",budgets:""
  });
  const Travelform = async(e)=> {
    e.preventDefault();
    const { title , descriptions, days , budgets } = user; 
    try {
    const res = 
    await fetch("/api/createlog",{
    method : "POST",
    headers: {
      "Content-Type" : "application/json"},
    body: JSON.stringify({
      title , descriptions, days , budgets 
    })

   });
   //logic if success
   const data = await res.json();
   if(res.status === 422 || !data ){
    window.alert('Error Occoured Unable to create Log')
   }else {
    window.alert('Log created successfully')
    history('/')
   }
  }catch(error){
    console.log(error)
    
  }
}
  const handleInputs = (e) => {
    let name, value;
    // console.log(e)
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user,[name]:value})
  }


  return (
    <>
     <Container component="main" maxWidth="xs">
     <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      
          <Typography component="h1" variant="h5">
          Create a Log
          </Typography>
          <Box component="form" onSubmit={Travelform} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              id="title"
              label="Enter the title for your travel log:"
              name="title"
              autoComplete=""
              autoFocus
              onChange={handleInputs} 
            />
              <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              id="descriptions"
              label="Explain your experience about your exprediton:"
              name="descriptions"
              autoComplete="descriptions"
              autoFocus
              onChange={handleInputs} 
            />
              <TextField
              margin="normal"
              required
              fullWidth
              type="number"
              id="days"
              label=" Days you spent on your travel:"
              name="days"
              autoComplete="days"
              autoFocus
              onChange={handleInputs} 
            />
              <TextField
              margin="normal"
              required
              fullWidth
              type="number"
              id="budget"
              label="Enter the budget for your travel"
              name="budgets"
              autoComplete="budgets"
              autoFocus
              onChange={handleInputs} 
            />
           
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Create New LOG
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Back to home ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/view" variant="body2">
                  {"Explore the log? "}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Container>
      
       
    </>
  )
  }
