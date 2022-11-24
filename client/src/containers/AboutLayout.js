import React from 'react'
import bppic from '../images/krishz70.png'
import aboutpic from '../images/aboutme.png'

import { useFetch} from '../utils/hooks';
function AboutLayout  () {
    const {data } = useFetch('/getdata')


  return (
    <>
      <div className='container emp-profile'>
        <form method='' className='form-control zmdi-format-valign-bottom bg-dark'>
          <div className='row bg-info'>

            <div className='col-md-4 '>
            <div className='profile-img '>
            <img src={ data.name === "BalkrishnaPokharel" ? bppic:aboutpic } height="100" width="100" alt='pic' />

            </div>
            </div>
            <div className='col-md-6 '>
              <div className='profile-head'>
                <h5>Balkrishna Pokharel</h5>
                <h6>Web Developer</h6>
                <p className='profile-rating mt-3 mb-5'>
                  RANKING : <span>
                  1/10
                  </span>
                </p>

                <ul className="nav nav-tabs bg-dark" id='myTab' role='tablist'>
                    <li className="nav-item ">
                      <a className="nav-link  " id='home-tab' data-toggle="tab" href="#home" role="tab">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active " id='profile-tab' data-toggle="tab" href="#profile" role="tab">Timeline</a>
                    </li>
                 
              </ul>
              </div>
            </div>
            <div className='col-md-2'>
              <input type="submit" className="profile-edit-button btn btn-block btn-outline-dark" name='btnAddMore' value='Edit-profile' id="" />
            </div>

          </div>
          <div className='row bg-info'>
            {/* left side url */}
            <div className='col-md-4 bg-dark'>
              <div className='profile-work '>
                <p>
                WORK LINK
                </p>
                <a className="btn btn-block btn-outline-info" href="https://www.youtube.com/channel/UC99-clym5BFgcQ1Ml8Scokw" target="_krishz70">Youtube</a> <br />
                <a className="btn btn-block btn-outline-info" href="https://www.youtube.com/channel/UC99-clym5BFgcQ1Ml8Scokw" target="_krishz70">Instagram</a> <br />
                <a className="btn btn-block btn-outline-info" href="https://www.youtube.com/channel/UC99-clym5BFgcQ1Ml8Scokw" target="_krishz70">Web Developer</a> <br />
                <a className="btn btn-block btn-outline-info" href="https://www.youtube.com/channel/UC99-clym5BFgcQ1Ml8Scokw" target="_krishz70">LInkedin</a> <br />
                <a className="btn btn-block btn-outline-info" href="https://www.youtube.com/channel/UC99-clym5BFgcQ1Ml8Scokw" target="_krishz70">Software Engineer</a> <br />
                <a className="btn btn-block btn-outline-info" href="https://www.youtube.com/channel/UC99-clym5BFgcQ1Ml8Scokw" target="_krishz70">Networking</a> <br />
                <a className="btn btn-block btn-outline-info" href="https://www.youtube.com/channel/UC99-clym5BFgcQ1Ml8Scokw" target="_krishz70">Twitter</a> <br />


              </div>
            </div>

            {/* right side data toggle */}
            <div className='col-md-8 pl-5 about-info bg-dark'>
              <div className='tab-content profile-tab ' id='myTabContent'>
                <div className='tab-pane fade ' id='home' role="tabpanel" aria-labelledby='home-tab'>
                  <div className='row mt-2'>
                    <div className='col-md-6 bg-info'>
                      <label>USER_ID</label>
                    </div>
                    <div className='col-md-6  bg-info'>
                       <p>2787427492974927</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6  bg-info'>
                      <label>User</label>
                    </div>
                    <div className='col-md-6  bg-info'>
                       <p>{data.username}</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6  bg-info'>
                      <label>Email</label>
                    </div>
                    <div className='col-md-6  bg-info'>
                       <p>email@gmail.com</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6  bg-info'>
                      <label>Phone</label>
                    </div>
                    <div className='col-md-6  bg-info'>
                       <p>977-987-765</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6  bg-info'>
                      <label>Profession</label>
                    </div>
                    <div className='col-md-6  bg-info'>
                       <p>Developer</p>   
                    </div>
                  </div>
                </div>
                {/* //timeline */}
                <div className="tab-pane fade show active " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className='row mt-2'>
                    <div className='col-md-6  bg-info'>
                      <label>Experience</label>
                    </div>
                    <div className='col-md-6  bg-info'>
                       <p>Export</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6  bg-info'>
                      <label>Hourly Rate</label>
                    </div>
                    <div className='col-md-6  bg-info'>
                       <p> 10 $</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6  bg-info'>
                      <label>Total projects</label>
                    </div>
                    <div className='col-md-6  bg-info'>
                       <p>350</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6  bg-info'>
                      <label>Happy Client</label>
                    </div>
                    <div className='col-md-6  bg-info'>
                       <p> 300</p>   
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6  bg-info'>
                      <label>Available</label>
                    </div>
                    <div className='col-md-6  bg-info'>
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

export default AboutLayout;