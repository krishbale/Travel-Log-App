import React, { useEffect,useState} from 'react'
import iphone from '../images/iphone.png';
import {  useNavigate } from 'react-router-dom';

const Contact = () => {
  
  const [userData,setUserData] = useState({name:"",email:"",phone:"",message:""});
  const history = useNavigate();
  const callContactPage = async () => {
    try{
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if(!res.status===200){
        const error = new Error(res.error);
        throw error;
      }

    }catch(e){
      console.log(e);
      history('/login')
    
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
            const res = fetch('/contact',{
              method:"POST",
              headers:{
                "Content-Type":"application/json"

              },
              body:JSON.stringify 
                ({
                  name,email,phone,message
                })
              });
              const data =  await res.json();
              if(!data){
                console.log('message not found');
              } else {
                alert("message send successfully");
                setUserData(...userData,userData.message)
              }
            

          }catch(e){
            console.log(e);
          }

          
        }
      
  return (
    <>
    <div className='contact-info'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
          {/* phone number */}
            <div className='contact-info-item d-flex justify-content-start align-items-center'>
              <img src={iphone} alt="phone" />
              <div className='contact-info-content'>
                <div className='contact-info-title'>
                   Phone
                </div>
                <div className='contact-info-text'>
                   {userData.phone}
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
                   {userData.email}
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
        <div className='contact-form'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-10 offset-lg-1'>
                <div className='contact-form-container py-5' >
                <div className='contact-form-title'>
                  Get in Touch
                </div>
                <form id='contact-form' method='POST' >
                  <div className='contact-form-name d-flex justify-content-between align-item-between'>
                  <input type="text" className="contact-form-name input_field" id="contact-form-name" 
                    placeholder='Your Nam name' r 
                    name='name'
                    equired={true} value={userData.name}
  
  onChange={handleInputs}                />
                    <input type="email" className="contact-form-email input_field" id="contact-form-email" 
                    placeholder='Your E-mail' 
                    name='email'
                     required={true} value={userData.email}
 
 onChange={handleInputs}                 />
                    <input type="number" className="contact-form-phone input_field" id="contact-form-phone" 
                    placeholder='Your Phone'  
                    name='phone'
                    required={true} value={userData.phone}
 
 onChange={handleInputs}                 />





                  </div>


                  <div className='contact-form-text mt-5'>
                    <textarea className="text-field contact-form-message" placeholder='Message' name="message"
    
    
                     value={userData.message}
                    onChange={handleInputs} id="" cols="30" rows="10"></textarea>
                  </div>
                  <div className='contact-form-button'>
                  <button type='submit' onClick={ contactForm} className='button contact-submit-button'>Send Message</button>

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

export default Contact