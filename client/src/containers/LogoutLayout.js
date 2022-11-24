import React, { useEffect,useContext } from 'react'
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom'


const Logout = () => {

  const {state,dispatch}  = useContext(UserContext);


    const history = useNavigate();
    useEffect(() => {
        try{
            const log =  fetch('/logout',{
                method: "GET",
                headers: {
                  Accept:"application/json",
                  "Content-Type": "application/json"
                },
                credentials: "include"
              })
             
              
        if(log.status !== 200){
    
            const error = new Error(log.error);
            throw error;
        }

        }catch(e)
        {
          dispatch({type:"USER",payload:false})
            console.log(e)
            history('/');

        }
    
      

     
    
    }, [])
    
  return (
    <>
        <h1> Logout ka page</h1>
    </>
  )
}

export default Logout