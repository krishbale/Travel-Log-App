import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import React,{useContext} from 'react'
import Log from './pages/Log';
import LoginLayout from './pages/Login';
import SignupLayout from './pages/Signup';
import Logout from './pages/Logout';
import {  UserContext } from '../src/App'
function Routing  ()  {
      const {state,dispatch} = useContext(UserContext);
      if(state==="false"){
            return(
                  <>
                        <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/login' element={<LoginLayout />} />
                        <Route path='/signup' element={<SignupLayout />} />
                        </Routes>
                  </>
            )

            console.log("state is falsed")
          } else{
            console.log('state is true')
          }
      return(
        <>
        <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/log' element={<Log />} />
       
       <Route path='/login' element={<LoginLayout />} />
       <Route path='/signup' element={<SignupLayout />} />
       <Route path='/logout' element={ <Logout /> } />
     
       </Routes>
       
       </>
  
  
        )
     
   
 
  }
  export default Routing