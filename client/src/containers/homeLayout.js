import React  from 'react'
import { useNavigate } from 'react-router-dom';
import { useFetch} from '../utils/hooks';
import Viewlog from '../components/ViewLog'
function HomeLayout  () {
  const history = useNavigate()
    const { data } = useFetch('/api/getdata')
   
  return (
    <>
     <div className='home-page'>
    <div className='home-div'>
    <p className='pt-5'>Welcome</p>
    {
      data.username===undefined ? <p> Please Login  </p> : <p>{data.username}</p>
    }
  
  

     
        </div>
    </div>
      <div className='container'>
      
    <div className='row'>
    <Viewlog />
     
    </div>
  
    </div>

    </>
   
    
  )
}

export default HomeLayout