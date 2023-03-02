import React  from 'react'
import { useNavigate } from 'react-router-dom';
import { useFetch} from '../utils/hooks';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomeLayout  () {
  const history = useNavigate()
    const { data } = useFetch('/api/getdata')
   
  return (
    <>
     <Container>
      <Row>
        <Col sm={8}>
        <p className='pt-5'>Welcome</p>
    {
      data.username===undefined ? <p> Please Login  </p> : <p>{data.username}</p>
    }
        </Col>
        <Col sm={4}>left over</Col>
      </Row>
      <Row>
        
        
        
      </Row>
    </Container>
   

  
  
  

    </>
   
    
  )
}

export default HomeLayout