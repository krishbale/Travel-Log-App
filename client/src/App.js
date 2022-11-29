import React,{createContext, useEffect, useReducer, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { initialState,reducer } from './reducer/useReducer';

import Routing from './Routing';
import Navbar from './pages/navbar';
export const UserContext = createContext({});
export const SessionContext = createContext({});
const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState)

  
  const[loading,setLoading] = useState(true)
  const [userSession,setUserSession] = useState(true)

useEffect(() => {
    const fetchUserAuth =async ()=>{
          try{
            setLoading(true)
            const res = await fetch('/api/isAuth')
            if(!res.ok) return setLoading(false)
            setUserSession(await res.json())
            setLoading(false)
          }catch(error){
            setLoading(false)
            console.error('There was an error fetch auth',error)
            
          }
        }

  
   fetchUserAuth()
  }, [])
  

   
  //1: context API
  



  return (
    <>
    <SessionContext.Provider value={userSession}>

    
    <UserContext.Provider value={{state,dispatch}}>
      <Navbar/>

      { loading ? <>loading...</>: <Routing /> }
      </UserContext.Provider>
      </SessionContext.Provider>
    

    </>
  )
}

export default App