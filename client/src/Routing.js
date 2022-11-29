import {Route,Routes} from 'react-router-dom'
import Home from './pages/home';
import Contact from './pages/contact';
import Errorpage from './pages/errorpage';
import About from './pages/about';
import Login from './pages/login';
import { UserContext,SessionContext } from './App';
import { useContext } from 'react';
import Log from './containers/Log';
import Signup from './pages/signup';
import Logout from './containers/Logout';
function Routing  ()  {
    const {state,dispatch} = useContext(UserContext)
    const sessioncontext = useContext(SessionContext)
    console.log(state);
    console.log(sessioncontext.username)
    if(sessioncontext.username){
      
      return(
        <>
        <Routes>

  
       
       <Route path='/' element={<Home/>} />
       <Route path='/log' element={<Log />} />
       <Route path='/about' element={<About />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/logout' element={<Logout/>} />
       <Route path='*' element={<Errorpage />} />
       </Routes>
       
       </>
  
  
        )
     
    }else if(!sessioncontext.username ){
      return(
        <>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      
        </Routes>
        </>
      
  
        )
    

    }
 
  }
  export default Routing