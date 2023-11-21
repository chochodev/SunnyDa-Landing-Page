import React from 'react';
import MainLayout from '../../components/layout';
import '../../assets/css/pages/contact.css';

const Contact = () => {
  return (
    <MainLayout>
        <div id="contact">
            <div className="hero" id="hero">
                <h2 className="heading">Contact Us</h2>
                <div className="content">
                    <div className="text">
                    <p className="info">Do you have any questions? We are always available and happy to help.</p>
                    {/* <div className="social_links">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                        <RiTwitterFill className='social_icon' />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                        <RiInstagramFill className='social_icon' />
                        </a>
                    </div> */}
                    </div>
                    
                    <form action="#" id="contact_form" className="contact_form" onSubmit={(e)=>e.preventDefault()}>
                    <input type="text" name="full_name" id="full_name" className="full_name" placeholder='Full name' />
                    <input type="email" name="email" id="email" className="email_input" placeholder='Email address' />
                    <textarea name="message" id="message" className="message" placeholder="Your message"></textarea>
                    <button className="submit">Send Message</button>
                    </form>
                </div>
                <button className="invest_btn">Invest with Us</button>
            </div>
        </div>
    </MainLayout>
  )
}

export default Contact;