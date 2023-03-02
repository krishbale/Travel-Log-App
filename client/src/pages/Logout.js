import React, { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {  UserContext } from '../App';
const Logout = () => {
    const {state,dispatch} = useContext(UserContext);
    const history = useNavigate();
    //promises

    useEffect(() => {
    fetch('/api/logout',
    {
        method:"GET",
        headers:
        {
            Accept:"application/json",
            "Content-Type":"application/json"

        },credentials:"include"
        
    }).then((res)=>{

        history('/',{ replace:true });
        dispatch({type:"USER",payload:"false"})
        if(res.status !== 200){
            const error = new Error(res.error);
            throw error;
        }



    }).catch((err)=>{
        console.log(err)

    });
    }, [])
    
  return (
    <>
    <h1>Logout page is working</h1>
    
    
    
    </>
  )
}

export default Logout