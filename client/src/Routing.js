import {Route,Routes} from 'react-router-dom'
import Home from './pages/home';
import React,{useContext} from 'react'
import Contact from './pages/contact';
import Errorpage from './pages/errorpage';
import About from './pages/about';
import Log from './containers/Log';
import LoginLayout from './containers/LoginLayout';
import SignupLayout from './containers/SignupLayout';
import Logout from './containers/Logout';
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
       <Route path='/about' element={<About />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/login' element={<LoginLayout />} />
       <Route path='/signup' element={<SignupLayout />} />
       <Route path='/logout' element={ <Logout /> } />
       <Route path='*' element={<Errorpage />} />
       </Routes>
       
       </>
  
  
        )
     
   
 
  }
  export default Routing