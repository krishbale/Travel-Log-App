import React, {useState} from 'react'
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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function SignupLayout  ()  {
  // const writer = "writer"
  // const viewer ="viewer"
  const   history = useNavigate();
  const [user,setUser] = useState({
    username:"",password:"",roles:"writer"
  });
 
  
  const handleInputs = (e) => {
    let name, value;
   

    name = e.target.name;
    value = e.target.value;
    setUser({ ...user,[name]:value})
   
  }


  const PostData = async(e) =>{
    e.preventDefault();

    const { username , password, roles } = user; 
  try {
    const res = 
    await fetch("/api/register",{
    method : "POST",
    headers: {
      "Content-Type" : "application/json"},
    body: JSON.stringify({
        username , password , roles
      

    })

   });
   //logic if success
    
   const data = await res.json();
   if(res.status === 422 || !data ){

    window.alert("Registeration failed")
   }else {
  
  
    window.alert('Registeration successfull')
    history('/login')
   
    

   }

  }catch(error){

    console.log(error)
  }

    
  

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={PostData} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleInputs} 
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputs} 
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Already have an Account? Sign IN"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Container>
    {/* <section className='signup bg-dark'>
    <div className='container mt-5 '>
    <div className='signup-content'>
    <div className='signup-form'>
      <h2 className='form-title'>Sign Up</h2>
      <form method='POST' className='register-form' >
      <div className='form-group '>
        <label htmlFor="username">
        <i className="zmdi zmdi-account material-icons-name bg-info"></i>

        </label>
        <input type="text" className='bg-dark' name="username" id="name" autoComplete='off'
          
          onChange={handleInputs} 
          placeholder='Your username'
        />
      </div>
     
      <div className='form-group'>
        <label htmlFor="password">
        <i className="zmdi zmdi-lock material-icons-password bg-info"></i>

        </label>
        <input type="text" name="password" id="password" autoComplete='off'
          
          onChange={handleInputs} className="bg-dark"
          placeholder='Your Password'
        />
      </div>
      <div className="form-group col-md-2 ">
      <label htmlFor="inputState" className='text-info'>Role:</label>
      <select id="inputState" name='roles'  onChange={handleInputs} className="form-control bg-dark text-info ">
        <option  value={writer} >writer</option>
        <option   value={viewer} >viewer</option>
      </select>
    </div>
      <div className='form-group form-button'>
        <input type="submit" name="signup" id="signup" className='form-submit btn btn-outline-info' value="register"
        onClick={ PostData } /> 
      </div>

      </form>

      <div className='signup-image'>
        <figure>
          <img src={signpic} height="100" width="75" alt="signpic" />
        </figure>

        <Link to="/login" className="signup-image-link btn btn-outline-warning" >Back to Login Page</Link>
      </div>
    </div>

    </div>

    </div>

    </section> */}
   </>
  )
}

export default SignupLayout