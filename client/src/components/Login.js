import React,{useState,useContext} from 'react'
import loginpic from '../images/login.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
const Login = () => {

  const {state,dispatch}  = useContext(UserContext);
  const   history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const loginUser =  async (e) => {
    e.preventDefault();
    try {
      
    const res =
    await
   fetch('/signin',
  {
   method : "POST",
   headers: {
   "Content-Type" : "application/json"},
   body : JSON.stringify({
     email , password,
   
   })
    });
    
    
     const data = await res.json();

     if(res.status === 422 || !data ){
       window.alert("Invalid Credentials");
       console.log('Invalid Credentials')

     }else {
      dispatch({type:"USER",payload:true})
       window.alert(" Login  successfull");
       console.log(' Login  successfull');
       history('/about');

       }

    } catch(error){
      console.log(error);

    }

  }
        


  return (
    <>
   
      <section className='sign-in'>
      <div className='container mt-5'>
      <div className='signin-content'>
      <div className='signin-image'>
        <figure>
          <img src={loginpic} height="100" width="75" alt="signpic" />
        </figure>

        <NavLink to="/signup" className="signup-image-link" >Create an account</NavLink>
      </div>

      <div className='signin-form'>
      <h2 className='form-title'>Log IN</h2>
      <form method='POST'
      className='register-form' id='register-form'>
      
      <div className='form-group'>
        <label htmlFor="email">
        <i className="zmdi zmdi-email material-icons-name"></i>

        </label>
        <input type="text" name="email" id="email" autoComplete='off' 
          placeholder='Your E-mail'
 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
                   />
      </div>
      <div className='form-group'>
        <label htmlFor="password">
        <i className="zmdi zmdi-lock material-icons-password"></i>

        </label>
        <input type="text" name="password" id="password" autoComplete='off' 
          placeholder='Your Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}

        />
      </div>
      <div className='form-group form-button'>
        <input type="submit"
        onClick={loginUser}
         name="login" id="login" className='form-submit' value="Login" />
      </div>

      </form>

     
      </div>

      </div>

      </div>


    </section>
    </>
  )
}

export default Login