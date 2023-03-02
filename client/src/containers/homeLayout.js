import React  from 'react'
import { useNavigate } from 'react-router-dom';
import { useFetch} from '../utils/hooks';
import Viewlog from '../components/ViewLog'
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
        <Col sm>  <Viewlog /></Col>
        
        
      </Row>
    </Container>

  
  
  

    </>
   
    
  )
}

export default HomeLayout