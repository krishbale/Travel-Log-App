import React, {useState} from 'react'
import signpic from "../images/signup.svg";
import { NavLink, useNavigate } from 'react-router-dom';


const Signup = () => {
  const   history = useNavigate();
  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });
  
  const handleInputs = (e) => {
    let name, value;
    console.log(e)
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user,[name]:value})
  }


  const PostData = async(e) =>{
    e.preventDefault();

    const { name , email, phone , work , password , cpassword} = user; 
  try {
    const res = 
    await fetch("/register",{
    method : "POST",
    headers: {
      "Content-Type" : "application/json"},
    body: JSON.stringify({
        name , email, phone , work , password , cpassword
      

    })

   });
   //logic if success
    
   const data = await res.json();
   if(res.status === 422 || !data ){
    window.alert("Invalid Registeration");
    console.log('Invalid Registeration')

   }else {
    window.alert(" Registeration successfull");
    console.log(' Registeration successfull')
    history('/login');

   }

  }catch(error){

    console.log(error)
  }

    
  

  }

  return (
   <>
    <section className='signup'>
    <div className='container mt-5'>
    <div className='signup-content'>
    <div className='signup-form'>
      <h2 className='form-title'>Sign Up</h2>
      <form method='POST' className='register-form' id='register-form'>
      <div className='form-group'>
        <label htmlFor="name">
        <i className="zmdi zmdi-account material-icons-name"></i>

        </label>
        <input type="text" name="name" id="name" autoComplete='off'
          value={user.name}
          onChange={handleInputs} 
          placeholder='Your Name'
        />
      </div>
      <div className='form-group'>
        <label htmlFor="email">
        <i className="zmdi zmdi-email material-icons-name"></i>

        </label>
        <input type="text" name="email" id="email" autoComplete='off'
          value={user.email}
          onChange={handleInputs} 
          placeholder='Your E-mail'
        />
      </div>
      <div className='form-group'>
        <label htmlFor="phone">
        <i className="zmdi zmdi-phone-in-talk material-icons-phone"></i>

        </label>
        <input type="number" name="phone" id="phone" autoComplete='off'
          value={user.phone}
          onChange={handleInputs} 
          placeholder='Your Phone No.'
        />
      </div>
      <div className='form-group'>
        <label htmlFor="work">
        <i className="zmdi zmdi-slideshow material-icons-work"></i>

        </label>
        <input type="text" name="work" id="work" autoComplete='off'
          value={user.work}
          onChange={handleInputs} 
          placeholder='Your Profession'
        />
      </div>
      <div className='form-group'>
        <label htmlFor="password">
        <i className="zmdi zmdi-lock material-icons-password"></i>

        </label>
        <input type="text" name="password" id="password" autoComplete='off'
          value={user.password}
          onChange={handleInputs} 
          placeholder='Your Password'
        />
      </div>
      <div className='form-group'>
        <label htmlFor="cpassword">
        <i className="zmdi zmdi-lock material-icons-cpassword"></i>

        </label>
        <input type="text" name="cpassword" id="cpassword" autoComplete='off'
          value={user.cpassword}
          onChange={handleInputs} 
          placeholder='Confirm Password'
        />
      </div>
      <div className='form-group form-button'>
        <input type="submit" name="signup" id="signup" className='form-submit' value="register"
        onClick={ PostData } />
      </div>

      </form>

      <div className='signup-image'>
        <figure>
          <img src={signpic} height="100" width="75" alt="signpic" />
        </figure>

        <NavLink to="/login" className="signup-image-link" >I am already register</NavLink>
      </div>
    </div>

    </div>

    </div>

    </section>
   </>
  )
}

export default Signup