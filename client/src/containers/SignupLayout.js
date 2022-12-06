import React, {useState} from 'react'
import signpic from "../images/signup.svg";
import { NavLink, useNavigate } from 'react-router-dom';


function SignupLayout  ()  {
  const writer = "writer"
  const viewer ="viewer"
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
    <section className='signup bg-dark'>
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

        <NavLink to="/login" className="signup-image-link btn btn-outline-warning" >Back to Login Page</NavLink>
      </div>
    </div>

    </div>

    </div>

    </section>
   </>
  )
}

export default SignupLayout