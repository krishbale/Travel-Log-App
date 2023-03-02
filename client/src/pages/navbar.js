import React from 'react'
import NavbarLayout from '../containers/NavbarLayout'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function navbar() {
  return (
    <>
 <Container fluid>
    <Row>
      <Col><NavbarLayout/></Col>
    </Row>
  </Container>
    
    </>
   
   
  )
}

export default navbar