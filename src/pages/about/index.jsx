import React from 'react';
import MainLayout from '../../components/layout';
import '../../assets/css/pages/about.css';

const About = () => {
  return (
    <MainLayout>
        <div id="about">
            <div id="hero" className="hero">
                <h2 className="heading">Your Gateway to Lucrative<br/>Cinematic Investments!</h2>
                <p className="info">Be a part of the thrilling world of movies and make a smart investment at the same time? Sunnyda Movie Trailers invites you to join us on an exciting journey into the booming movie industry in Australia.</p>
                <button className="invest_btn">Invest with Us</button>
            </div>

            <div id="section_2" className="section_2 section">
                <div className="text_div">
                    <h3 className="text">About <p>SunnyDa</p></h3>
                    <p className="info">At Sunnyda Movie Trailers, we are driven by a shared passion for the captivating world of cinema and a commitment to intelligent investment. As enthusiasts of the booming movie industry in Australia, we invite you to explore the heart of our vision. Founded on the belief that the magic of movies can be both a thrilling experience and a smart investment opportunity, Sunnyda Movie Trailers welcomes you to join us on this exciting journey. 
                    <br/><br/>
                    Our mission is to build a vibrant community of individuals who share our enthusiasm for the Australian film industry, fostering a space where creativity and financial wisdom converge seamlessly. Discover the story behind our commitment to redefining the narrative, where the excitement of movies intersects with shrewd financial choices, shaping a future that resonates with the magic and potential of the silver screen.</p>
                    <button className="invest_btn">Invest Now</button>
                </div>
                {/* <div className="images">
                    <img src="./images/image5.jpeg" alt="theatre" className='img' />
                    <img src="./images/image4.jpeg" alt="theatre" className='img _2' />
                </div> */}
            </div>

            <div id="section_3" className="section_3 section">
                <div className="text_div">
                    <p className="text">Vision </p>
                    <p className="info">Empower your cinematic aspirations and financial future with Sunnyda Movie Trailers.  Our vision is to foster a community that passionately embraces the burgeoning opportunities within the Australian film industry, creating a synergistic blend of creativity and financial acumen. Join us as we redefine the narrative, bridging the gap between cinematic excitement and astute investment, shaping a future where the magic of movies intertwines seamlessly with smart financial choices.</p>
                    <button className="invest_btn">Invest Now</button>
                </div>
                {/* <div className="images">
                    <img src="./images/image5.jpeg" alt="theatre" className='img' />
                </div> */}
            </div>
        </div>
    </MainLayout>
  )
}

export default About;