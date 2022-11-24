import React,{createContext, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home';
import Contact from './pages/contact';
import Errorpage from './pages/errorpage';
import About from './pages/about';
import Login from './pages/login';
import Logout from './pages/logout';
import Navbar from './pages/navbar';
import Createlog from './components/Createlog';
import Signup from './pages/signup';


import { initialState, reducer } from '../src/reducer/useReducer';


export const UserContext = createContext();
const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  //1: context API

const Routing = () => {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/myLog/*' element={<Createlog />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='*' element={<Errorpage />} />
      
      </Routes>

  )
}

  return (
    <>
    
  

    <UserContext.Provider value={{state,dispatch}}>
      <Navbar/>
      <Routing /> 
      </UserContext.Provider>
    </>
  )
}

export default App