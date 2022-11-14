import React from 'react'
import iphone from '../images/iphone.png';

const Contact = () => {
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
                   +91 1111 543 7856 
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
                   user@provider.com
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
                <form id='contact-form'>
                  <div className='contact-form-name d-flex justify-content-between align-item-between'>
                  <input type="text" className="contact-form-name input_field" id="contact-form-name" 
                    placeholder='Your Name' required={true}
                  />
                    <input type="email" className="contact-form-email input_field" id="contact-form-email" 
                    placeholder='Your E-mail' required={true}
                  />
                    <input type="number" className="contact-form-phone input_field" id="contact-form-phone" 
                    placeholder='Your Phone' required={true}
                  />





                  </div>


                  <div className='contact-form-text mt-5'>
                    <textarea className="text-field contact-form-message" placeholder='Message' id="" cols="30" rows="10"></textarea>
                  </div>
                  <div className='contact-form-button'>
                  <button type='submit' className='button contact-submit-button'>Send Message</button>

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