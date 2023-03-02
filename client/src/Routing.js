import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import React,{useContext} from 'react'
import LoginLayout from './pages/Login';
import SignupLayout from './pages/Signup';
import Logout from './pages/Logout';
import {  UserContext } from '../src/App'
import Createlog from './components/Createlog';
import Updatelog from './components/Updatelog';
import ViewLog from './components/ViewLog';
function Routing  ()  {
      const {state} = useContext(UserContext);
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
          } else{
            console.log('state is true')
          }
      return(
        <>
       <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/create' element={<Createlog/>} />
       <Route path='/update' element={<Updatelog />} />
       <Route path='/view' element={<ViewLog />} />
       <Route path='/login' element={<LoginLayout />} />
       <Route path='/signup' element={<SignupLayout />} />
       <Route path='/logout' element={ <Logout /> } />
       </Routes>
       
       </>
  
  
        )
     
   
 
  }
  export default Routing