import React from 'react';
// {createContext, useReducer}
 
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import {Route,Routes} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css'
import Errorpage from './components/Errorpage';
import Logout from './components/Logout';

// export const UserContext = createContext();
const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState, init)
//   //1: context API



  return (
    <>
   
    {/* <UserContext.Provider value={{state,dispatch}}> */}
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='*' element={<Errorpage />} />
      
      </Routes>
      {/* </UserContext.Provider> */}
    
     
    </>
  )
}

export default App