import React  from 'react'
import { useNavigate } from 'react-router-dom';
import { useFetch} from '../utils/hooks';
import ViewLog from '../components/ViewLog';
function HomeLayout  () {
  const history = useNavigate()
    const { data } = useFetch('/getdata')
    console.log(data)
  return (
    <div className='home-page bg-secondary'>
    <div className='home-div'>
    <p className='pt-5'>Welcome</p>
    {
      data.username===undefined ? <p> Please Login  </p> : <p>{data.username}</p>
    }
  
    <div>
    <ViewLog/>
  
    </div>

     
        </div>
    </div>
  )
}

export default HomeLayout