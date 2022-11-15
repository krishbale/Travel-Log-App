import React, { useEffect,useState} from 'react'
import {  useNavigate, useRouteLoaderData } from 'react-router-dom';

const Home = () => {
  const [userData,setUserData] = useState({});
  const history = useNavigate();
  const callHomePage = async () => {
    try{
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
       
      })
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if(!res.status===200){
        const error = new Error(res.error);
        throw error;
      }

    }catch(e){
      console.log(e);
     history('/login')
    
    }
  }
           
      useEffect(() => {
        callHomePage();
      }, []);
  return (
    <div className='home-page'>
    <div className='home-div'>
    <p className='pt-5'>Welcome</p>

        <h1>{ userData.name }</h1>
    </div>
     
        
    </div>
  )
}

export default Home