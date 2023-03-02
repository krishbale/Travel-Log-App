import React, { useContext } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
         <Col><NavLink  to="/">Home </NavLink></Col>
        <Col> <NavLink  to="/login">Login</NavLink></Col>
        <Col> <NavLink  to="/signup">Register</NavLink></Col>
        
       

        </>
      )
    } else{
      console.log('state is true')
      return (
        <>
        <Col>  <NavLink  to="/">Home</NavLink></Col>
        <Col>  <NavLink  to="/log">Create Log </NavLink></Col>
        <Col> <NavLink  to="/logout">Logout</NavLink></Col>
  
        
        
  
         
       
          
  
  
  
        </>
  
      )
    }
  

  }
  return (
    <>
     <Container>
      <Row>
        <Col> 
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink></Col>
        <Col>
        <Row>
       
        <RenderMenu />
      </Row>
       
        </Col>
      </Row>
    
    </Container>
     

         

        
      
    </>
  )
}

export default Navbar