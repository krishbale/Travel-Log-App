import React, { useEffect,useState} from 'react'
import iphone from '../images/iphone.png';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

const ContactLayout = () => {
  
  const [userData,setUserData] = useState({name:"",email:"",phone:"",message:""});
  const history = useNavigate();
  const callContactPage = async () => {
    try{
      let {data} = await axios.get('/api/getdata')
      setUserData(data);
   
      setUserData(data);
      if(!data.status===200){
        const error = new Error(data.error);
        throw error;
      }else{
      
      }

    }catch(e){
      console.log(e);
      history('/api/login')
    
    }
  }
           
      useEffect(() => {
        callContactPage();
      }, [])
      //we are storing data in states
        const handleInputs = (e) => {
          let title = e.target.name;
          let value = e.target.value;
          setUserData({...userData,[title]:value })
        }
        //send the data to backend
        const contactForm = async (e)=> {
          e.preventDefault();
          const {name,email,phone,message} = userData;
          try{
            await axios.post('/api/contact',{
                name,email,phone,message
              }
              );
           
          }catch(e){
            console.log(e);
          }

          
        }
      
  return (
    <>
    <div className='contact-info bg-info'>
      <div className='container-fluid '>
        <div className='row '>
          <div className='col-lg-10 offset-lg-1 d-flex justify-content-between '>
          {/* phone number */}
            <div className='contact-info-item d-flex justify-content-start align-items-center'>
              <img src={iphone} alt="phone" />
              <div className='contact-info-content ' >
                <div className='contact-info-title bg-opacity-100'>
                   Phone
                </div>
                <div className='contact-info-text'>
                   987-876-654
                </div>
              </div>
            </div>
            {/* email number */}
            <div className='contact-info-item d-flex justify-content-start align-items-center'>
              <img src={iphone} alt="phone" />
              <div className='contact-info-content'>
                <div className='contact-info-title'>
                   Email
                </div>
                <div className='contact-info-text'>
                   email@gmail.com
                </div>
              </div>
            </div>
            {/* Address number */}
            <div className='contact-info-item d-flex justify-content-start align-items-center'>
              <img src={iphone} alt="phone" />
              <div className='contact-info-content'>
                <div className='contact-info-title'>
                   Address
                </div>
                <div className='contact-info-text'>
                   X-Street 123 ,Planet Y
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>



    {/* center form field */}
        <div className='contact-form bg-dark' >
          <div className='container '>
            <div className='row '>
              <div className='col-lg-10 offset-lg-1 '>
                <div className='contact-form-container py-5' >
                <div className='contact-form-title bg-info'>
                  Get in Touch
                </div>
                <form id='contact-form' method='POST'  >
                  <div className='contact-form-name d-flex justify-content-between align-item-between bg-info'>
                  <input type="text" className="contact-form-name input_field bg-dark text-white" id="contact-form-name" 
                    placeholder='Your name' 
                    name='name'
                    required={true} 
  
                    onChange={handleInputs}                />
                    <input type="email" className="contact-form-email input_field bg-dark text-white " id="contact-form-email" 
                    placeholder='Your E-mail' 
                    name='email'
                     required={true} 
 
                    onChange={handleInputs}                 />
                    <input type="number" className="contact-form-phone input_field bg-dark text-white " id="contact-form-phone" 
                    placeholder='Your Phone'  
                    name='phone'
                    required={true} 
 
                    onChange={handleInputs}                 />
                  </div>


                  <div className='contact-form-text mt-5'>
                    <textarea className="text-field contact-form-message form-control form-control-plaintext bg-dark text-white" placeholder='Click here write  the message:' name="message"
    
    
                    
                    onChange={handleInputs} id="" cols="30" rows="10"></textarea>
                  </div>
                  <div className='contact-form-button'>
                  <button type='submit' onClick={ contactForm} className='button contact-submit-button btn-outline-info'>Send Message</button>

                  </div>
                </form>

                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ContactLayout