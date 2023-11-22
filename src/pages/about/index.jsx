import React from 'react';
import MainLayout from '../../components/layout';
import '../../assets/css/pages/about.css';

const About = () => {
  return (
    <MainLayout>
        <div id="about">
            <div id="hero" className="hero">
                <h3 className="text">About <p>SunnyDa</p></h3>
                <h2 className="heading">Your Gateway to Lucrative<br/>Cinematic Investments!</h2>
                <p className="info">Be a part of the thrilling world of movies and make a smart investment at the same time? Sunnyda Movie Trailers invites you to join us on an exciting journey into the booming movie industry in Australia.</p>
                <button className="invest_btn">Invest with Us</button>
            </div>

            <div id="section_2" className="section_2">
                <div className="text_div">
                    <p className="heading">Vision</p>
                    <p className="info">Sunnyda Movie Trailers is the sole manufacturer of these purpose-built trailers for the Australian movie industry. As a team of Queensland-based film industry professionals, we understand the market intimately and are poised for significant growth and profitability.<br/><br/>Are you ready to be a part of the thrilling world of movies and make a smart investment at the same time? Sunnyda Movie Trailers invites you to join us on an exciting journey into the booming movie industry in Australia.</p>
                    <button className="invest_btn">Invest Now</button>
                </div>
                <div className="images">
                    <img src="./images/image5.jpeg" alt="sunnyda" className='img' />
                    <img src="./images/image4.jpeg" alt="sunnyda" className='img _2' />
                </div>
            </div>

            <div id="section_3" className="section_3">
                <div className="text_div">
                    <p className="heading">Mission </p>
                    <p className="info">Sunnyda Movie Trailers is the sole manufacturer of these purpose-built trailers for the Australian movie industry. As a team of Queensland-based film industry professionals, we understand the market intimately and are poised for significant growth and profitability.<br/><br/>Are you ready to be a part of the thrilling world of movies and make a smart investment at the same time? Sunnyda Movie Trailers invites you to join us on an exciting journey into the booming movie industry in Australia.</p>
                    <button className="invest_btn">Invest Now</button>
                </div>
                <div className="images">
                    <img src="./images/image5.jpeg" alt="sunnyda" className='img' />
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default About;