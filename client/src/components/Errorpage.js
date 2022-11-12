import React from 'react'
import { NavLink } from 'react-router-dom';


const Errorpage = () => {
  return (
    <>
        <div id="notfound">
            <div className='notfound'>
                <div className='notfound-404'>
                    <h1>404</h1>
                </div>
                <h2>We are sorry , Page Not Found</h2>
                <p className='mb-5'>
                    THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED ITS NAME CHANGED OR IS TEMPORARILY NOT AVAILABLE
                </p>
                <NavLink to="/"> Back TO Hompage</NavLink>
            </div>
        </div>
    </>
  )
}

export default Errorpage