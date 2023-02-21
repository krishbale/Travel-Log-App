import  { useState,useEffect } from 'react'

import axios from 'axios';

const useFetch = (url) => {
    const[data,setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const { data } = await axios.get(url);
                setData(data);
            }catch(e){
                console.log(e);
                
            }
        };
        fetchData();
    }, [])
  return { data };
  
}
export  { useFetch };
