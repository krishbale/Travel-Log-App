import React, { useContext } from 'react'




import { NavLink } from 'react-router-dom';
import logo from "../images/logo2.png";
import {  UserContext } from '../App';
const Navbar = () => {
  const {state,dispatch} = useContext(UserContext);
  const RenderMenu = () => {
    if(state==="false"){
      console.log("state is falsed")
      return(
        <>
         <NavLink  to="/">Home </NavLink>
       <NavLink  to="/login">Login</NavLink>
      <NavLink  to="/signup">Register</NavLink>
        
       

        </>
      )
    } else{
      console.log('state is true')
      return (
        <>
       <NavLink  to="/">Home</NavLink>
       <NavLink  to="/create">Create Log</NavLink>
       <NavLink  to="/update">Update Log</NavLink>
       <NavLink  to="/view">ViewLog</NavLink>
      <NavLink  to="/logout">Logout</NavLink>
        </>
  
      )
    }
  

  }
  return (
    <>
    
        <li> 
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink></li>
        <li>
         
        <RenderMenu />
   
       
        </li>
   
    
   
     

         

        
      
    </>
  )
}

export default Navbar