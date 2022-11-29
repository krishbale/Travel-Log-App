import React from 'react';
import Createlog from '../components/Createlog'
import Updatelog from '../components/Updatelog'
function Log() {
  return (
    <>
    <div className="container">
  <div className="row">
    <div className="col">
     
      <Updatelog/>
    </div>
   
  
  </div>
  <div className="col">
      
     
      <Createlog />
      
    </div>
</div>

    </>
  )
}

export default Log