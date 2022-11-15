import React, { useEffect, useState} from 'react'
import bppic from '../images/krishz70.png'
import aboutpic from '../images/aboutme.png'
import {  useNavigate  } from 'react-router-dom';

const About = () => {
  const history = useNavigate();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try{
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept:"application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      const data = await res.json();
     
      setUserData(data);
      
      if(await !res.status===200){
        const error = new Error(res.error);
        throw error;
      }

    }catch(e){
      console.log(e);
    history('/login')
    
    }
  }
           
      useEffect(() => {
        callAboutPage();
      }, [])
      
  return (
    <>
      <div className='container emp-profile'>
        <form method=''>
          <div className='row'>

            <div className='col-md-4'>
            <div className='profile-img'>
            <img src={ userData.name === "Balkrishna Pokharel" ? bppic:aboutpic } height="100" width="100" alt='pic' />

            </div>
            </div>
            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>Balkrishna Pokharel</h5>
                <h6>Web Developer</h6>
                <p className='profile-rating mt-3 mb-5'>
                  RANKING : <span>
                  1/10
                  </span>
                </p>

                <ul className="nav nav-tabs" id='myTab' role='tablist'>
                    <li className="nav-item">
                      <a className="nav-link active " id='home-tab' data-toggle="tab" href="#home" role="tab">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link " id='profile-tab' data-toggle="tab" href="#profile" role="tab">Timeline</a>
                    </li>
                 
              </ul>
              </div>
            </div>
            <div className='col-md-2'>
              <input type="submit" className="profile-edit-button" name='btnAddMore' value='Edit-profile' id="" />
            </div>

          </div>
          <div className='row'>
            {/* left side url */}
            <div className='col-md-4'>
              <div className='profile-work'>
                <p >
                WORK LINK
                </p>
                <a href="https://www.youtube.com/channel/UC99-clym5BFgcQ1Ml8Scokw" target="_krishz70">Youtube</a> <br />
                <a href="https://www.youtube.com/channel/UC99-clym5BFgcQ1Ml8Scokw" target="_krishz70">Instagram</a> <br />
                <a href="https://www.youtube.com/channel/UC99-clym5BFgcQ1Ml8Scokw" target="_krishz70">Web Developer</a> <br />
                <a href="https://www.youtube.com/channel/UC99-clym5BFgcQ1Ml8Scokw" target="_krishz70">LInkedin</a> <br />
                <a href="https://www.youtube.com/channel/UC99-clym5BFgcQ1Ml8Scokw" target="_krishz70">Software Engineer</a> <br />
                <a href="https://www.youtube.com/channel/UC99-clym5BFgcQ1Ml8Scokw" target="_krishz70">Networking</a> <br />
                <a href="https://www.youtube.com/channel/UC99-clym5BFgcQ1Ml8Scokw" target="_krishz70">Twitter</a> <br />


              </div>
            </div>

            {/* right side data toggle */}
            <div className='col-md-8 pl-5 about-info'>
              <div className='tab-content profile-tab' id='myTabContent'>
                <div className='tab-pane fade active' id='home' role="tabpanel" aria-labelledby='home-tab'>
                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label>USER_ID</label>
                    </div>
                    <div className='col-md-6'>
                       <p>2787427492974927</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                       <p>{userData.name}</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Email</label>
                    </div>
                    <div className='col-md-6'>
                       <p>{userData.email}</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Phone</label>
                    </div>
                    <div className='col-md-6'>
                       <p>{userData.phone}</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Profession</label>
                    </div>
                    <div className='col-md-6'>
                       <p>{userData.work}</p>   
                    </div>
                  </div>
                </div>
                {/* //timeline */}
                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label>Experience</label>
                    </div>
                    <div className='col-md-6'>
                       <p>Export</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Hourly Rate</label>
                    </div>
                    <div className='col-md-6'>
                       <p> 10 $</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Total projects</label>
                    </div>
                    <div className='col-md-6'>
                       <p>350</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Happy Client</label>
                    </div>
                    <div className='col-md-6'>
                       <p> 300</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Available</label>
                    </div>
                    <div className='col-md-6'>
                       <p>24  hours</p>   
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </form>
      </div>
     
        
    </>
  )
}

export default About