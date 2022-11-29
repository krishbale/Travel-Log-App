import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import {  UserContext } from '../App';
const  Logout = async()=> {
    const history = useNavigate();
    const {state,dispatch} = useContext(UserContext);
    const res = await fetch(('/logout'),{
        method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"

    })
              const data =  await res.json();
   
            if(data.status !== 200){
                const error = new Error(res.error);
                throw error;
            }else{
                
            dispatch({type:"USER",payload:false})
            history('/login',{replace:true});

            }
    
            return (
    <>
    <h1>Logging out .........................</h1>

    </>
  )

}

export default Logout