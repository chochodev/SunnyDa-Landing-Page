import { Link } from 'react-router-dom';
import '../../assets/css/pages/home.css';
import MainLayout from '../../components/layout';

const Home = () => {
  const works = [
    {
      image: './src/assets/images/image1.jpeg',
      tags: 'Green・Sustainable・Clean'
    },
    {
      image: './src/assets/images/image5.jpeg',
      tags: 'Green・Sustainable・Clean'
    },
    {
      image: './src/assets/images/image3.jpeg',
      tags: 'Green・Sustainable・Clean'
    },
    {
      image: './src/assets/images/image4.jpeg',
      tags: 'Green・Sustainable・Clean'
    },
    {
      image: './src/assets/images/image6.jpeg',
      tags: 'Green・Sustainable・Clean'
    },
    {
      image: './src/assets/images/image7.png',
      tags: 'Green・Sustainable・Clean'
    },
  ]

  return (
    <MainLayout>
      <div id='home'>
        <div id='hero' className='hero'>
          <h2 className="hero_text">Introducing a Lucrative Investment Opportunity in the Movie Industry with Sunnyda Movie Trailers</h2>
        </div>

        {/* SECOND SECTION -- READY */}
        <div id='section_2' className="section_2">
          <h2 className='heading'>Ready?</h2>
          <p className="info">Are you ready to be a part of the thrilling world of movies and make a smart investment at the same time? Sunnyda Movie Trailers invites you to join us on an exciting journey into the booming movie industry in Australia.</p>
          <div className="cards">
            {works.map((work, index) => (
              <div className="card" key={index}>
                <img src={work.image} alt='Card' className="card_img"/>
              </div>
            ))}
          </div>
        </div>

        {/* THIRD SECTION -- WHAT ARE WE */}
        <div id='section_3' className="section_3">
          <h2 className="heading">What Are We?</h2>
          <img src="./src/assets/images/image3.jpeg" alt="what-are-we" className='what_are_we_img' />
          <p className="info">Sunnyda Movie Trailers is your gateway to a unique and profitable investment opportunity. We specialize in manufacturing next-generation trailers tailored specifically to meet the demands of the dynamic movie production industry. Our diverse range of trailers includes sought-after hair and makeup units, single and double greenrooms, wardrobe trailers, and offices.</p>
        </div>

        {/* FOURTH SECTION -- WHY INVEST WITH US */}
        <div id='section_4' className="section_4">
          <h2 className="heading">Why Invest with Us?</h2>
          <p className="info">In an era where global studios and production companies are increasingly focused on their environmental, social, and governance (ESG) commitments, Sunnyda Movie Trailers offers a win-win solution. While traditional movie trailers rely on diesel-powered trucks, our innovative trailers can be easily towed by utes, offering superior efficiency and cost-effectiveness. We&apos;ve integrated cutting-edge technologies like solar panels, batteries, and LED lighting, significantly reducing carbon emissions and aligning with eco-friendly and sustainable practices.</p>
          <img src="./src/assets/images/image7.png" alt="why-invest-image" className='why_invest_img' />
        </div>

        
        {/* FIFTH SECTION -- WHAT SETS US APART */}
        <div id='section_5' className="section_5">
          <h2 className="heading">What Sets Us Apart?</h2>
          <p className="info">Sunnyda Movie Trailers is the sole manufacturer of these purpose-built trailers for the Australian movie industry. As a team of Queensland-based film industry professionals, we understand the market intimately and are poised for significant growth and profitability.</p>
          <p className="text">We prioritize the security of your investment. Here&apos;s what we offer:</p>
          <div className="cards">
            <div className="card">A three-year investment term</div>
            <div className="card">A competitive interest rate of 10%</div>
            <div className="card">Monthly interest payments</div>
          </div>
        </div>
        
        
        {/* SIXTH SECTION -- TRANSPARENCY AND ACCOUNTABILITY */}
        <div id='section_6' className="section_6">
          <h2 className="heading">Transparency and Accountability</h2>
          <div className="content">
            <p className="info">Sunnyda Movie Trailers operates with the utmost transparency and accountability. We undergo independent audits to maintain financial integrity and ensure compliance with industry standards. With the movie industry&apos;s rapid growth and new studios proposed on the Gold Coast and in Cairns, the demand for our trailers is expected to be constant and ever-increasing.</p>
            <Link to='' className='get_started_link'>Get Started</Link>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home;