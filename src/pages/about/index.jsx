import React from 'react';
import MainLayout from '../../components/layout';
import '../../assets/css/pages/about.css';

const About = () => {
  return (
    <MainLayout>
        <div id="about">
            <div id="hero" className="hero">
                <h3 className="text">Welcome To <p>SunnyDa</p></h3>
                <h2 className="heading">Your Gateway to Lucrative<br/>Cinematic Investments!</h2>
                <p className="info">Are you ready to be a part of the thrilling world of movies and make a smart investment at the same time? Sunnyda Movie Trailers invites you to join us on an exciting journey into the booming movie industry in Australia.</p>
                <button className="invest_btn">Invest with Us</button>
            </div>

            <div id="section_2" className="section_2">
                <div className="text_div">
                    <p className="head">About DesignHub</p>
                    <p className="heading">Introduction To The Best<br/> <p>Digital Agency</p></p>
                    <p className="info">Sunnyda Movie Trailers is the sole manufacturer of these purpose-built trailers for the Australian movie industry. As a team of Queensland-based film industry professionals, we understand the market intimately and are poised for significant growth and profitability.<br/><br/>Are you ready to be a part of the thrilling world of movies and make a smart investment at the same time? Sunnyda Movie Trailers invites you to join us on an exciting journey into the booming movie industry in Australia.</p>
                    <button className="invest_btn">Invest Now</button>
                </div>
                <div className="images">
                    <img src="image5.jpeg" alt="sunnyda" className='img' />
                    <img src="image4.jpeg" alt="sunnyda" className='img _2' />
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default About;