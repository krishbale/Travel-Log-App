import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo2.png";
import {  UserContext,SessionContext } from '../App';

const Navbar = () => {
  const {state,dispatch} = useContext(UserContext);
  const sessioncontext = useContext(SessionContext)
  const RenderMenu = () => {
    if(sessioncontext.username) {
                                  return (
                                    <>
                              
        <li className="nav-item active">
       <NavLink className="nav-link bg-info" to="/">Home <span className="sr-only"></span></NavLink>
     </li>
     <li className="nav-item ">
       <NavLink className="nav-link bg-info" to="/about">About</NavLink>
     </li>
     
     <li className="nav-item">
       <NavLink className="nav-link bg-info" to="/contact">Contact</NavLink>
     </li>
     <li className="nav-item ">
       <NavLink className="nav-link bg-info" to="/log">Create Log <span className="sr-only"></span></NavLink>
     </li>     
     <li className="nav-item ">
       <NavLink className="nav-link bg-info" to="/logout">LOG OUT <span className="sr-only"></span></NavLink>
     </li>     

                                </>
       
                              )
    } 
    else  {
      return(
        <>
                               <li className="nav-item">
                                <NavLink className="nav-link bg-success" to="/login">Login</NavLink>
                              </li>
                              
                              <li className="nav-item">
                                <NavLink className="nav-link bg-info" to="/signup">Register</NavLink>
                              </li>

       </>
    
      )
    }

  }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <NavLink className="navbar-brand bg-warning" to="/">
    <img src={ logo }  alt="logo" />
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon "></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
     <RenderMenu /> 
   
    </ul>
   
  </div>
</nav>
    </>
  )
}

export default Navbar