import React from 'react';
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


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='*' element={<Errorpage />} />
      
      </Routes>
    
     
    </>
  )
}

export default App