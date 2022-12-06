import React,{createContext, useEffect, useReducer, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { initialState,reducer } from './reducer/useReducer';

import Routing from './Routing';
import Navbar from './pages/navbar';
export const UserContext = createContext({});


const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
 

  

useEffect(() => {
    const fetchUserAuth =async ()=>{
          try{
            const res = await fetch('/api/isAuth')
            if(!res.ok) 
            dispatch({type:'USER',payload:"false"})
          
          }catch(error){
           
            console.log('There was an error fetch auth',error)
            
          }
        }

  
   fetchUserAuth()
  }, [])
  

   
  //1: context API
  



  return (
    <>
   

    <UserContext.Provider value={{state,dispatch }}>

    <Navbar/>

    <Routing /> 
    </UserContext.Provider>
 
  
   
    

    </>
  )
}

export default App